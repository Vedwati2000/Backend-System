const express = require("express");
const router = express.Router();
const Chat = require("../models/chatModel");

router.post("/", async(req, res) => {
    const {chat} = req.body;
    const newChat = new Chat({chat});
    await newChat.save();
    res.json(newConv);
})

router.get("/", async(req, res) => {
    const chats = await Chat.find();
    res.json(chats);
});

router.delete("/:id", async(req, res) => {
    await Chat.findByIdAndDelete(req.params.id);
    res.json({message : "Deleted"})
})

module.exports = router;