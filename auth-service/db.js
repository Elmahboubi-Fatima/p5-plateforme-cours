const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log(" Connected avec succès à la base de données");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

module.exports = connectDB;
