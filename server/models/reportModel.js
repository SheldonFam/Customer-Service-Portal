const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  date: String,
  customerName: String,
  work: String,
  actions: String,
});

module.exports = mongoose.model("Report", reportSchema);
