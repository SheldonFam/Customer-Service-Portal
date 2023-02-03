import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface ReportListProps {
  reports: Array<Reports>;
}

export const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <ul>
      {reports && reports.length ? (
        reports.map((report, index) => (
          <Link to={`/report/${report._id}`} key={index} id={report._id}>
            <li className="flex justify-between px-2 py-4 items-center border mb-4 flex-1 rounded-lg hover:border-slate-500 text-sm md:text-lg">
              <span className="font-medium">RN{report.reportNo}</span>
              <span>{report.name}</span>
              <span>{report.date}</span>
              <span>
                <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
              </span>
            </li>
          </Link>
        ))
      ) : (
        <div>There are no reports to display.</div>
      )}
    </ul>
  );
};
