const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
