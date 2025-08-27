const express = require("express");
const router = express.Router();
const Signup = require("../models/signupModel");


router.post("/", async (req, res) => {
    const {name, email, password, conPassword} = req.body;
    const newSign = new Signup({ name, email, password, conPassword});
    await newSign.save();
    res.json(newSign);
})


router.get("/", async(req, res) => {
    const signup = await Signup.find();
    res.json(signup);
})


router.delete("/:id", async (req, res) => {
    await Signup.findByIdAndDelete(req.params.id);
    res.json({ message : "Deleted"});
})


module.exports = router;