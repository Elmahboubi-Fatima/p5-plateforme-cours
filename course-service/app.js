const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

const courseRoute = require('./Route/Course'); 
app.use("/course", courseRoute);
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
