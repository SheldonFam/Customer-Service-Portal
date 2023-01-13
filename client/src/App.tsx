import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [reports, setReports] = useState<Array<Reports>>([]);

  useEffect(() => {
    async function fetchReports() {
      const response = await fetch("http://localhost:8000/reports");
      const newReport = await response.json();
      setReports(newReport);
    }
    fetchReports();
  }, []);

  //After sumbit from home pages
  const handleAddReports = (newReport: Reports) => {
    async function submitReport() {
      const response = await fetch("http://localhost:8000/reports", {
        method: "POST",
        body: JSON.stringify(newReport),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(newReport);
      return response.json();
    }
    submitReport();
    const unique_id = uuid();
    const reportId = unique_id.slice(0, 8);
    newReport._id = reportId;
    setReports([...reports, newReport]);
  };

  const handleUpdateReports = (updateData: Reports) => {
    async function saveReport() {
      const response = await fetch(
        `http://localhost:8000/reports/${updateData._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name: updateData.name,
            work: updateData.work,
            date: updateData.date,
            actions: updateData.actions,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    }
    saveReport();
    setReports(
      reports.map((report) =>
        report._id === updateData._id ? updateData : report
      )
    );
    console.log("updated success");
  };

  const handleDeleteReports = (reportData: Reports) => {
    async function deleteReport() {
      const response = await fetch(
        `http://localhost:8000/reports/${reportData._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    }
    deleteReport();
    setReports(reports.filter((report) => report._id !== reportData._id));
    console.log("successful delete");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePages addReport={handleAddReports} reportList={reports} />
          }
        />
        <Route
          path={`/report/:reportId`}
          element={
            <ReportPages
              reportData={reports}
              updateReports={handleUpdateReports}
              deleteReports={handleDeleteReports}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
