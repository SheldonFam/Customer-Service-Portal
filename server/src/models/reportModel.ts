import mongoose from "mongoose";
import { Schema } from "mongoose";

const AutoIncrement = require("mongoose-sequence")(mongoose);

const reportSchema = new Schema({
  userId: { type: String, required: true },
  reportNo: Number,
  date: String,
  name: String,
  work: String,
  actions: String,
});

reportSchema.plugin(AutoIncrement, { inc_field: "reportNo", start_seq: 10000 });

export const reportData = mongoose.model("Report", reportSchema);
