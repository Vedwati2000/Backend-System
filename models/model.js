const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  school: String
});

module.exports = mongoose.model("Student", studentSchema, "datas");
