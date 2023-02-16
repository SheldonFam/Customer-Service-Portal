import { Button } from "../component/button";
import React, { useState } from "react";
import { Modal } from "../component/modal";
import { Input } from "../component/input";
import { TextArea } from "../component/textarea";
import { ReportList } from "../component/reportlist";
import { useEffect } from "react";
import * as ReportsApi from "../api/reports_api";
import { Reports } from "../models/reports";
import { SkeletonCard } from "../component/skeletoncard";

export const HomePage = () => {
  const [reports, setReports] = useState<Array<Reports>>([]);
  const [loading, setLoading] = useState(true);
  const [showLoadingError, setShowLoadingError] = useState(false);

  useEffect(() => {
    async function fetchAllReports() {
      try {
        setShowLoadingError(false);
        setLoading(true);
        const reports = await ReportsApi.fetchAllReports();
        setReports(reports);
      } catch (error) {
        console.log(error);
        setShowLoadingError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAllReports();
  }, []);

  //After sumbit from home pages
  async function createNewReport(newReportData: Reports) {
    try {
      const newReport = await ReportsApi.createReport(newReportData);
      setReports([...reports, newReport]);
    } catch (error) {
      console.log(error);
    }
  }

  //For modal open and close
  const [showAddReportModal, setShowAddReportModal] = useState(false);

  //Form submit initial Data
  const initialData = {
    reportNo: "",
    _id: "",
    name: "",
    date: "",
    actions: "",
    work: "",
  };

  const [data, setData] = useState<Reports>(initialData);

  const { _id, name, date, actions, work } = data;

  //For Input Submit function
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNewReport(data);
    setShowAddReportModal(false);
    setData(initialData);
  };

  return (
    <div className="px-6 py-10 w-full max-w-2xl h-full m-auto min-h-screen">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col mr-auto">
          <h1 className="font-bold text-sm md:text-2xl">Reports</h1>
          <p className="text-sm">Total Reports : {reports.length}</p>
        </div>
        <div>
          <Button
            variant="primary"
            shape="circle"
            onClick={() => setShowAddReportModal(true)}
          >
            New Report
          </Button>
        </div>
      </div>
      <Modal isOpen={showAddReportModal} title={"Create Report"}>
        <form onSubmit={handleSubmit}>
          <div id={_id}>
            <Input
              label="Date"
              type="date"
              onChange={handleInputChange}
              name={"date"}
              value={date}
              required={true}
            ></Input>
            <Input
              label="Customer Name"
              type="text"
              onChange={handleInputChange}
              name={"name"}
              value={name}
              required={true}
            ></Input>
            <Input
              label="Description of Work"
              type="text"
              onChange={handleInputChange}
              name={"work"}
              value={work}
              required={true}
            ></Input>
            <TextArea
              label="Actions Performed"
              onChange={handleTextAreaChange}
              name={"actions"}
              value={actions}
              required={true}
            ></TextArea>
            <div className="flex justify-end mt-2 gap-2">
              <Button
                onClick={() => {
                  setShowAddReportModal(false);
                  setData(initialData);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Modal>
      {loading && [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n} />)}
      {showLoadingError && (
        <p>Something went wrong. Please refresh the page.</p>
      )}
      {!loading && !showLoadingError && <ReportList reports={reports} />}
    </div>
  );
};
