const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    chat : String,
})

module.exports = mongoose.model("Chat", ChatSchema)