const express = require("express");
const router = express.Router();
const Conversion = require("../models/conversionModel");

router.post("/", async (req, res) => {
  const { number, base, result } = req.body;
  const newConv = new Conversion({ number, base, result });
  await newConv.save();
  res.json(newConv);
});

router.get("/", async (req, res) => {
  const conversions = await Conversion.find();
  res.json(conversions);
});

router.delete("/:id", async (req, res) => {
  await Conversion.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
