import express from "express";
import {
  getAllReports,
  createReport,
  deleteReport,
  updateReport,
  getReportCount,
} from "../controllers/reportController";

const router = express.Router();

router
  .get("/", getAllReports)
  .get("/totalreports", getReportCount)
  .post("/", createReport)
  .patch("/:id", updateReport)
  .delete("/:id", deleteReport);

module.exports = router;
