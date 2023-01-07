import { Response, Request } from "express";
import { reportData } from "../models/reportModel";

export const getAllReports = async (req: Request, res: Response) => {
  try {
    const reports = await reportData.find({});
    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createReport = async (req: Request, res: Response) => {
  try {
    const report = await reportData.create({
      name: req.body.name,
      work: req.body.work,
      actions: req.body.actions,
      date: req.body.date,
    });
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const report = await reportData.findOneAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!report) {
      return res.status(404).json({ message: `No report with id:${id}` });
    }
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const report = await reportData.findByIdAndDelete(id);
    if (!report) {
      return res.status(404).json({ message: `No report with id:${id}` });
    }
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
