const { Router } = require('express');
const router = Router();

const shoesModel = require('../Model/shoesModels');

router.get("/getShoes", async (req, res) => {
    try {
        const shoes = await shoesModel.find({})
        res.send(shoes)
        console.log("This is the shows that we get from API Call", shoes)
    }
    catch (error) {
        console.log("THis is error for getSHoes", error);
        return res.status(400).json({ message: error });

    }
});

module.exports = router;
