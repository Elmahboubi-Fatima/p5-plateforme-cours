const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  titre: String,
  professeur_id: String,
  description: String,
  prix: Number,
});

module.exports = mongoose.model("Course", CourseSchema);
