const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();
const studentRoute = require('./routes/student'); 
app.use("/student",studentRoute);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
