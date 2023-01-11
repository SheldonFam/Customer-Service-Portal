import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  //Initial Report Data
  // const DefaultList = [
  //   {
  //     _id: "abc12345",
  //     name: "Customer Name",
  //     work: "Work",
  //     date: "2022-01-01",
  //     actions: "Actions",
  //   },
  // ];

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
  const addReports = (newReport: Reports) => {
    const unique_id = uuid();
    const reportId = unique_id.slice(0, 8);
    newReport._id = reportId;
    setReports([...reports, newReport]);
  };

  const updateReports = (updateData: Reports) => {
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

  const deleteReports = (updateData: Reports) => {
    async function dReport() {
      const response = await fetch(
        `http://localhost:8000/reports/${updateData._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    }
    dReport();
    setReports(reports.filter((report) => report._id !== updateData._id));
    console.log("successful delete");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePages addReport={addReports} reportList={reports} />}
        />
        <Route
          path={`/report/:reportId`}
          element={
            <ReportPages
              reportData={reports}
              updateReports={updateReports}
              deleteReports={deleteReports}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
