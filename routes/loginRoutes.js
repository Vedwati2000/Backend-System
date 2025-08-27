const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");

router.post("/", async(req, res) => {
    const {name, email, password} = req.body;
    const newLog = new Login({name, email, password});
    await newLog.save();
    res.json(newLog)
})

router.get("/", async(req, res) => {
    const login = await Login.find();
    res.json(login);
})


router.delete("/:id", async(req, res) => {
    await Login.findByIdAndDelete(req.params.id);
    res.json({message : "Deleted"})
})

module.exports = router;