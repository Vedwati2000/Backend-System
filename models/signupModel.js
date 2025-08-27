const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    conPassword : String

})

module.exports = mongoose.model("Signup", SignupSchema);