import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AutoIncrement = require("mongoose-sequence")(mongoose);

const reportSchema = new Schema({
  reportNo: Number,
  date: String,
  name: String,
  work: String,
  actions: String,
});

reportSchema.plugin(AutoIncrement, { inc_field: "reportNo", start_seq: 10000 });

export const reportData = mongoose.model("Report", reportSchema);
