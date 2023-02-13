import { HomePage } from "./pages/Home";
import { ReportPage } from "./pages/Report";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/report/:reportId`} element={<ReportPage />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
