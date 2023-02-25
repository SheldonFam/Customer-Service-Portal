import express from "express";
import {
  getAllReports,
  getReport,
  createReport,
  deleteReport,
  updateReport,
} from "../controllers/reportController";

const router = express.Router();

router
  .get("/", getAllReports)

  .get("/:id", getReport)

  .post("/", createReport)

  .patch("/:id", updateReport)

  .delete("/:id", deleteReport);

export default router;
