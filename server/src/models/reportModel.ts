import mongoose from "mongoose";
import mongooseAutoIncrement from "mongoose-auto-increment";

mongooseAutoIncrement.initialize(mongoose.connection);

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  reportNo: { type: Number, autoIncrement: true },
  date: String,
  name: String,
  work: String,
  actions: String,
});

reportSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "Report",
  field: "reportNo",
  startAt: 10000,
});

export const reportData = mongoose.model("Report", reportSchema);
