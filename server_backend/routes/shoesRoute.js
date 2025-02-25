// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const shoesModel = require('../Model/shoesModels');

router.get("/getShoes", async (req, res) => {
    try {
        const shoes = await shoesModel.find({})
        res.send(shoes);
    }
    catch (error) {
        console.log("This is error for getShoes", error);
        return res.status(400).json({ message: error });

    }
});

router.post('/addShoes', async (req, res) => {
    const { shoes } = req.body;

    const { shoesName, category, description, sizes, prices, imageUrl } = shoes;

    console.log(shoesName, category, description, sizes, prices, imageUrl, 'clg body');
    try {
        const newShoes = new shoesModel({
            name: shoesName,
            sizes: sizes,
            prices: prices,
            category: category,
            image: imageUrl,
            description: description,
        });

        console.log(newShoes);
        await newShoes.save();
        console.log("Saved shoes", newShoes);
        res.status(201).json(newShoes);
    } catch (error) {
        console.error("Error adding shoes:", error);
        res.status(500).json({ message: "Failed to add shoes.", error: error.message });
    }
});

module.exports = router;
