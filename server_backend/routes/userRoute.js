// user router code.
const Router = require('express');
const User = require("../Model/userModel.js");
const jwt = require("jsonwebtoken");
const { Validation } = require('../utils/userValidation')
const { genSalt, hash, compare } = require("bcryptjs");
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");
require('dotenv').config()

const express = require('express');
exports.router = express.Router();

const router = Router();
// ------------------------------------Sign-Up Part------------------------------------------------- 

router.post("/signup", async (req, res) => {

    try {
        const { name, email, password, passwordVerify } = req.body;
        // console.log('THis is the body that we recieve in backend ', name, email, password, passwordVerify)

        //validation
        if (!name || !email || !password || !passwordVerify) {
            return res
                .status(400)
                .json({
                    errormessage: Validation ? Validation.REQ : "Email, password and password verification are required",
                });
        } if (password.length < 6) {
            return res
                .status(400)
                .json({
                    errormessage: "Please enter a password of atleast 6 character",
                });
        } if (password !== passwordVerify) {
            return res
                .status(400)
                .json({
                    errormessage: "Password doesn't match",
                });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res
                .status(400)
                .json({
                    errormessage: "User with this email already exist.",
                });
            return
        } else {
            const salt = await genSalt();
            const passwordHash = await hash(password, salt);

            const newUser = new User({
                name,
                email,
                passwordHash,
            });
            const savedUser = await newUser.save();

            // Sign in token 
            const token = sign(
                {
                    user: savedUser._id,
                },
                process.env.JWT_SECRET
            );
            // console.log(token)
            res.cookie("token", token, {
                httpOnly: true,
            })
                .send();
            res
                .status(200)
                .json({
                    message: "User created successfully.."
                });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    };
});


// --------------------------------------Log-In Part---------------------------------------------

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email, password, "This is email nd pass");

        if (!email || !password) {
            return res
                .status(400)
                .send({
                    errormessage: "Please enter all required fields",
                });
        }

        // E-mail validate.

        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(401)
                .send({
                    errormessage: "Wrong e-mail."
                });
        }

        const passwordCorrect = await bcrypt.compare(password, userExists.passwordHash);
        if (!passwordCorrect) {
            return res.status(401)
                .send({
                    errormessage: "Wrong  password."
                });
        }



        // sign in token
        const token = sign(
            {
                user: userExists._id,
            },
            process.env.JWT_SECRET
        );

        //  send token in HTTP - only cookie
        res.cookie("token", token, {
            httpOnly: true,
        })
        if (userExists && passwordCorrect) {
            const currentUser = {
                name: userExists.name,
                email: userExists.email,
                isAdmin: userExists.isAdmin,
                _id: userExists._id
            }
            res.send(currentUser)

        }


    } catch (error) {
        console.log("Here is the error", error);
        res.send();
    }
});
//--------------------------------Log-out Part ------------------------------------------------//

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    })
        .send();
    console.log("loggedout");
})


module.exports = router;