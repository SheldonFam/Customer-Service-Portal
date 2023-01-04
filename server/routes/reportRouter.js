const express = require("express");

const router = express.Router();

const {
  getAllReports,
  createReport,
  getReport,
  updateReport,
  deleteReport,
} = require("../controller/reports");

router
  .get("/", getAllReports)
  .post("/", createReport)
  .get("/:id", getReport)
  .patch("/:id", updateReport)
  .delete("/:id", deleteReport);

module.exports = router;
