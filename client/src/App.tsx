import { HomePages } from "./pages/Home";
import { ReportPages } from "./pages/Report";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path={`/report/:reportId`} element={<ReportPages />} />
      </Routes>
    </>
  );
}

export default App;
