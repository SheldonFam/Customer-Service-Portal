"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const mongooseAutoIncrement = require("mongoose-auto-increment");
mongooseAutoIncrement.initialize(mongoose_1.default.connection);
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
exports.reportData = mongoose_1.default.model("Report", reportSchema);
