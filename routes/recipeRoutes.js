const express = require('express');
const router = express.Router();
const Recipe = require("../models/recipeModel");

router.post("/", async(req, res) => {
    const {name, price, image} = req.body;
    const newReci = new Recipe({name, price, image});
    await newReci.save();
})


router.get("/", async(req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes); 
})

router.delete("/:id", async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({message : "Deleted"});
});

module.exports = router;