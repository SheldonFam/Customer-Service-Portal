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
  .post("/", createReport)
  .patch("/:id", updateReport)
  .delete("/:id", deleteReport)
  .get("/totalreports", getReportCount);
export default router;
