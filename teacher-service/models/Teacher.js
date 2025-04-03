const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: String,
  bio: String,
  cours: [String],
});

module.exports = mongoose.model("Teacher", TeacherSchema);
