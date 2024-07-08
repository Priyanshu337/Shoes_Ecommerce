const Customer = require("../Model/customerModel");
const express = require("express");
const router = express.Router();
const Auth = require("../middleware/Auth");

router.post("/", Auth, async (req, res) => {
    try {
        const { name } = req.body;
        const newCustomer = new Customer({
            name,
        });
        const savedCustomer = await newCustomer.save();

        res.json(savedCustomer);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/", Auth, async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;