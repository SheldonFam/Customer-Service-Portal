"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportCount = exports.deleteReport = exports.updateReport = exports.createReport = exports.getAllReports = void 0;
const reportModel_1 = require("../models/reportModel");
const getAllReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reports = yield reportModel_1.reportData.find({});
        res.status(200).json({ reports });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAllReports = getAllReports;
const createReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const report = yield reportModel_1.reportData.create({
            name: req.body.name,
            work: req.body.work,
            actions: req.body.actions,
            date: req.body.date,
        });
        res.status(200).json(report);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.createReport = createReport;
const updateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const report = yield reportModel_1.reportData.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(report);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.updateReport = updateReport;
const deleteReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const report = yield reportModel_1.reportData.findByIdAndDelete(id);
        res.status(200).json(report);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.deleteReport = deleteReport;
const getReportCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalReports = yield reportModel_1.reportData.countDocuments();
        res.status(200).json(totalReports);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getReportCount = getReportCount;
