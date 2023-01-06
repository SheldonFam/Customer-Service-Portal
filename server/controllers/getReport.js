const Report = require("../models/reportModel");

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find({});
    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateReport = async (req, res) => {
  try {
    const { id: reportID } = req.params;
    const report = await Report.findOneAndUpdate({ _id: reportID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!report) {
      return res.status(404).json({ message: `No report with id:${reportID}` });
    }
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteReport = async (req, res) => {
  try {
    const { id: reportID } = req.params;
    const report = await Report.findByIdAndDelete({ _id: reportID });
    if (!report) {
      return res.status(404).json({ message: `No report with id:${reportID}` });
    }
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllReports,
  createReport,
  updateReport,
  deleteReport,
};
