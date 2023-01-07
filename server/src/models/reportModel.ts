import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  date: String,
  name: String,
  work: String,
  actions: String,
});

export const reportData = mongoose.model("Report", reportSchema);
