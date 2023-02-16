import { Button } from "../component/button";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../component/modal";
import { useState } from "react";
import { Input } from "../component/input";
import { TextArea } from "../component/textarea";
import { useEffect } from "react";
import * as ReportsApi from "../api/reports_api";
import { Reports } from "../models/reports";

export const ReportPage = () => {
  const [reports, setReports] = useState<Array<Reports>>([]);

  useEffect(() => {
    async function fetchAllReports() {
      try {
        const reports = await ReportsApi.fetchAllReports();
        setReports(reports);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllReports();
  }, []);

  const [reportData, setReportData] = useState({
    reportNo: "",
    _id: "",
    name: "",
    work: "",
    date: "",
    actions: "",
  });

  const params = useParams();

  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  // const { reportId } = useParams();
  // const data = reports.find((report) => report._id === reportId);

  useEffect(() => {
    async function fetchData() {
      const { reportId } = params;
      const response = await ReportsApi.fetchSingleReport(reportId);
      setReportData(response);
    }
    fetchData();
    return;
  }, [params.reportId]);

  const [openEditModal, setOpenEditModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEditTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  async function updateReport(updateReport: Reports) {
    try {
      await ReportsApi.updateReport(updateReport);
      setReports(
        reports.map((existingReport) =>
          existingReport._id === updateReport._id
            ? updateReport
            : existingReport
        )
      );
      console.log("updated success");
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenEditModal(false);
    updateReport(reportData);
  };

  async function deleteReport(report: Reports) {
    try {
      await ReportsApi.deleteReports(report._id);
      setReports(
        reports.filter((existingReport) => existingReport._id !== report._id)
      );
      console.log("successful delete");
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  }

  return (
    <div className="px-6 py-10 md:px-12 min-h-screen max-w-3xl m-auto text-xs md:text-base">
      <div className="flex flex-row justify-between mb-2">
        <div>
          <Button onClick={returnToHome}>Go Back</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"primary"} onClick={() => setOpenEditModal(true)}>
            Edit
          </Button>
          <Button variant={"danger"} onClick={() => setOpenDeleteModal(true)}>
            Delete
          </Button>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="font-bold">Report RN{reportData.reportNo}</div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>Date: {reportData.date}</div>
          <div>Customer Name: {reportData.name}</div>
          <div>Description of Work: {reportData.work}</div>
          <div>Actions Performed: {reportData.actions}</div>
        </div>
      </div>
      <div>
        <Modal isOpen={openEditModal} title={"Edit Report"}>
          <form onSubmit={handleSubmit} id={reportData._id}>
            <Input
              label="Date"
              type="date"
              name={"date"}
              value={reportData.date}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <Input
              label="Customer Name"
              type="text"
              name={"name"}
              value={reportData.name}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <Input
              label="Description of Work"
              type="text"
              name={"work"}
              value={reportData.work}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <TextArea
              label="Actions Performed"
              name={"actions"}
              value={reportData.actions}
              onChange={handleEditTextArea}
              required={true}
            ></TextArea>
            <div className="flex justify-end mt-2 gap-2">
              <Button
                onClick={() => {
                  setOpenEditModal(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </form>
        </Modal>
      </div>
      <div>
        <Modal isOpen={openDeleteModal} title={"Confirm Deletion?"}>
          <div>
            Are you sure you want to delete report RN{reportData.reportNo}? This
            action cannot be undone.
          </div>
          <div className="flex justify-end mt-2 gap-2">
            <Button
              onClick={() => {
                setOpenDeleteModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="submit"
              onClick={() => deleteReport(reportData)}
            >
              Yes
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
