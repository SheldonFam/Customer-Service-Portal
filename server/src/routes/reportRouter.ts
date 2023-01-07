import express from "express";
import {
  getAllReports,
  createReport,
  deleteReport,
  updateReport,
} from "../controllers/reportController";

const router = express.Router();

router
  .get("/", getAllReports)
  .post("/", createReport)
  .patch("/:id", updateReport)
  .delete("/:id", deleteReport);

module.exports = router;
