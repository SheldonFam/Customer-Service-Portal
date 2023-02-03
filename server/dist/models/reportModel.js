"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportData = void 0;
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
reportSchema.plugin(AutoIncrement, { inc_field: "reportNo", start_seq: 10000 });
exports.reportData = mongoose_1.default.model("Report", reportSchema);
