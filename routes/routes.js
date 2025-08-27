const express = require("express");
const router = express.Router();
const Model = require("../models/model");



router.post("/post", async (req, res) => {
    console.log("Request body:", req.body);
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        console.error("Save error:", error);
        res.status(400).json({ message: error.message });
    }
});





router.get("/getAll", async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/getOne/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch("/update/:id", async (req, res) => {
    try {
        const data = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id);
        res.json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
