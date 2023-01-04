import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  //Initial Report Data
  const DefaultList = [
    {
      id: "abc12345",
      name: "Customer Name",
      work: "Work",
      date: "2022-01-01",
      actions: "Actions",
    },
  ];

  const [reports, setReports] = useState<Array<Reports>>(DefaultList);

  //After sumbit from home pages
  const addReports = (newReport: Reports) => {
    const unique_id = uuid();
    const reportId = unique_id.slice(0, 8);
    newReport.id = reportId;
    setReports([...reports, newReport]);
  };

  const updateReports = (updateData: Reports) => {
    setReports(
      reports.map((report) =>
        report.id === updateData.id ? updateData : report
      )
    );
    console.log("updated success");
  };

  const deleteReports = (updateData: Reports) => {
    setReports(reports.filter((report) => report.id !== updateData.id));
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
