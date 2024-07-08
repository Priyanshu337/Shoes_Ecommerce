// user router code.
const { Router } = require('express');
const { users, findOne } = require("../Model/userModel.js");
const jwt = require("jsonwebtoken");
const { Validation } = require('../utils/userValidation')
const { genSalt, hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require('dotenv').config()

const express = require('express');
exports.router = express.Router();

const router = Router();
// ------------------------------------Sign-Up Part-------------------------------------------------

router.post("/signup", async (req, res) => {

    try {
        const { email, password, passwordVerify } = req.body;

        //validation
        if (!email || !password || !passwordVerify) {
            return res
                .status(400)
                .json({
                    errormessage: Validation.REQ,
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
        const existingUser = await findOne({ email: req.body.email });

        if (existingUser) {
            return res
                .status(400)
                .json({
                    errormessage: "User already exist.",
                });
        } else {
            const salt = await genSalt();
            const passwordHash = await hash(password, salt);

            const newUser = new users({
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
            console.log(token)
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

        // E-mail validate 

        if (!email || !password) {
            return res
                .status(400)
                .json({
                    errormessage: "Please enter all required fields",
                });
        }

        // E-mail validate 

        const existingUser = await findOne({ email });
        if (!existingUser) {
            return res.status(401)
                .json({
                    errormessage: "Wrong e-mail or password."
                });
        }

        // Password Validation

        const passwordCorrect = await compare(password, existingUser.passwordHash);
        if (!passwordCorrect) {
            return res.status(401)
                .json({
                    errormessage: "Wrong e-mail or password."
                });
        }

        // Sign in token 
        const token = sign(
            {
                user: existingUser._id,
            },
            process.env.JWT_SECRET
        );

        // send token in HTTP-only cookie 
        res.cookie("token", token, {
            httpOnly: true,
        })
            .send();
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
//--------------------------------Log-out Part ------------------------------------------------//

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    })
        .send();
})


module.exports = router;