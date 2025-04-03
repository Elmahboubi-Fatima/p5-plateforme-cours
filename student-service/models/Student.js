const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  nom: String,
  email: String,
  cours: [String],
});

module.exports = mongoose.model("Student", StudentSchema);
