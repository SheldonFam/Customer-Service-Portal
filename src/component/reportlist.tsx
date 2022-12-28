import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ReportListProps {
  reports: Array<Reports>;
}

export const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <>
      <ul>
        {reports.map((report) => (
          <li
            className="flex justify-between px-2 py-4 items-center border mb-4 flex-1 rounded-lg"
            key={report.name}
            id={report.date}
          >
            <span>RN10001</span>
            <span>{report.name}</span>
            <span>{report.date}</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
