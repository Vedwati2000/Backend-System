require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const conversionRoutes = require("./routes/conversionRoutes");
const loginRoutes = require("./routes/loginRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const signupRoutes = require("./routes/signupRoutes");
const chatRoutes = require("./routes/chatRoutes");
const routes = require("./routes/routes");


const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://operating-system-seven.vercel.app"],
  methods: ["GET", "POST", "PUT","DELETE"],
  credentials: true
}))


const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () => console.log("Database Connected"));

app.use("/api/conversions", conversionRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api", routes);

app.listen(3000, () => console.log(`Server started at port 3000`));

