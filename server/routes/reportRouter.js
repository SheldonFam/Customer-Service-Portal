const express = require("express");

const router = express.Router();

const {
  getAllReports,
  createReport,
  updateReport,
  deleteReport,
} = require("../controllers/reportController");

router
  .get("/", getAllReports)
  .post("/", createReport)
  .patch("/:id", updateReport)
  .delete("/:id", deleteReport);

module.exports = router;
