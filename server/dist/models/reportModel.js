"use strict";
// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportData = void 0;
// const mongooseAutoIncrement = require("mongoose-auto-increment");
// mongooseAutoIncrement.initialize(mongoose.connection);
// const reportSchema = new Schema({
//   reportNo: { type: Number, autoIncrement: true },
//   date: String,
//   name: String,
//   work: String,
//   actions: String,
// });
// reportSchema.plugin(mongooseAutoIncrement.plugin, {
//   model: "Report",
//   field: "reportNo",
//   startAt: 10000,
// });
// export const reportData = mongoose.model("Report", reportSchema);
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose_1.default);
const reportSchema = new Schema({
    reportNo: Number,
    date: String,
    name: String,
    work: String,
    actions: String,
});
reportSchema.plugin(AutoIncrement, { inc_field: "reportNo" });
exports.reportData = mongoose_1.default.model("Report", reportSchema);
