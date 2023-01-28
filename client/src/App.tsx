import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const reportApi = "https://reports-api.vercel.app";
// const localhost = "http://localhost:8000";

function App() {
  const [reports, setReports] = useState<Array<Reports>>([]);

  useEffect(() => {
    async function fetchAllReports() {
      const response = await fetch(`${reportApi}/reports`);
      const reports = await response.json();
      const allReports = reports.reports;
      setReports(allReports);
    }
    fetchAllReports();
  }, []);

  //After sumbit from home pages
  const handleAddReports = async (newReport: Reports) => {
    const response = await fetch(`${reportApi}/reports`, {
      method: "POST",
      body: JSON.stringify(newReport),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newReportData = await response.json();
    setReports([...reports, newReportData]);
  };

  const handleUpdateReports = async (updateData: Reports) => {
    const response = await fetch(`${reportApi}/reports/${updateData._id}`, {
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
    });
    setReports(
      reports.map((report) =>
        report._id === updateData._id ? updateData : report
      )
    );
    console.log("updated success");
  };

  const handleDeleteReports = async (reportData: Reports) => {
    const response = await fetch(`${reportApi}/reports/${reportData._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReports(reports.filter((report) => report._id !== reportData._id));
    console.log("successful delete");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePages addReport={handleAddReports} reports={reports} />}
        />
        <Route
          path={`/report/:reportId`}
          element={
            <ReportPages
              reports={reports}
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
