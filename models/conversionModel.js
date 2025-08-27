const mongoose = require("mongoose");

const ConversionSchema = new mongoose.Schema({
  number: String,
  base: String,
  result: String,
});

module.exports = mongoose.model("Conversion", ConversionSchema);
