import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  //Initial Report Data
  const DefaultList = [
    {
      id: "",
      name: "Customer Name",
      work: "Work",
      date: "Date",
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

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePages addReport={addReports} reportList={reports} />}
        />
        <Route
          path={`/report/:reportId`}
          element={<ReportPages reportData={reports} />}
        />
      </Routes>
    </>
  );
}

export default App;
