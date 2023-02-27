import { HomePage } from "./pages/HomePage";
import { ReportPage } from "./pages/ReportPage";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/report/:reportId`} element={<ReportPage />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
