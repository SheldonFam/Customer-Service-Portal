import { Button } from "../components/button";
import { useState } from "react";
import { ReportList } from "../components/reportlist";
import { useEffect } from "react";
import * as ReportsApi from "../api/reports_api";
import { Reports } from "../models/reports";
import { SkeletonCard } from "../components/skeletoncard";
import { ReportModal } from "../components/reportmodal";

export const HomePage = () => {
  const [reports, setReports] = useState<Array<Reports>>([]);
  const [loading, setLoading] = useState(true);
  const [showLoadingError, setShowLoadingError] = useState(false);
  const [showAddReportModal, setShowAddReportModal] = useState(false);

  useEffect(() => {
    async function fetchAllReports() {
      try {
        setShowLoadingError(false);
        setLoading(true);
        const reports = await ReportsApi.fetchAllReports();
        setReports(reports);
      } catch (error) {
        setShowLoadingError(true);
        throw error;
      } finally {
        setLoading(false);
      }
    }
    fetchAllReports();
  }, []);

  async function createNewReport(newReportData: Reports) {
    try {
      const newReport = await ReportsApi.createReport(newReportData);
      setReports([...reports, newReport]);
      setShowAddReportModal(false);
    } catch (error) {
      throw error;
    }
  }

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
      <ReportModal
        isOpen={showAddReportModal}
        createNewReport={createNewReport}
        onDismiss={() => setShowAddReportModal(false)}
      />
      {loading && [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n} />)}
      {showLoadingError && (
        <p>Something went wrong. Please refresh the page.</p>
      )}
      {!loading && !showLoadingError && <ReportList reports={reports} />}
    </div>
  );
};
