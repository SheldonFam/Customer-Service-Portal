import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface ReportListProps {
  reports: Array<Reports>;
}

export const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <>
      <ul>
        {reports.map((report) => (
          <Link to={"/report"}>
            <li
              className="flex justify-between px-2 py-4 items-center border mb-4 flex-1 rounded-lg"
              key={report.id}
              id={report.id}
            >
              <span>RN10001</span>
              <span>{report.name}</span>
              <span>{report.date}</span>
              <span>
                <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
