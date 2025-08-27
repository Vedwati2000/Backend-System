const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    name : String,
    price : Number,
    image : String
})

module.exports = mongoose.model("Recipe", RecipeSchema)