import { Response, Request } from "express";
import { reportData } from "../models/reportModel";

export const getAllReports = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reports = await reportData.find({});
    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createReport = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const report = await reportData.create({
      name: req.body.name,
      work: req.body.work,
      actions: req.body.actions,
      date: req.body.date,
    });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateReport = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const report = await reportData.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteReport = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const report = await reportData.findByIdAndDelete(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// export const getReportCount = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const totalReports = await reportData.countDocuments();
//     res.status(200).json(totalReports);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };
