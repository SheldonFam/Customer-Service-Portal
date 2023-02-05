import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface ReportListProps {
  reports: Array<Reports>;
}

export const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {reports && reports.length ? (
        reports.map((report, index) => (
          <Link to={`/report/${report._id}`} key={index} id={report._id}>
            <li className="border rounded-lg px-6 py-4 mb-4 hover:border-slate-500 text-xs md:text-base">
              <div className="flex items-center ">
                <div className="flex-1">RN{report.reportNo}</div>
                <div className="flex-1">{report.name}</div>
                <div className="flex-1">{report.date}</div>
                <div>
                  <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </li>
          </Link>
        ))
      ) : (
        <div>There are no reports to display.</div>
      )}
    </ul>
  );
};

// import React from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-router-dom";

// interface ReportListProps {
//   reports: Array<Reports>;
// }

// export const ReportList: React.FC<ReportListProps> = ({ reports }) => {
//   return (
//     <ul>
//       {reports && reports.length ? (
//         reports.map((report, index) => (
//           <Link to={`/report/${report._id}`} key={index} id={report._id}>
//             <li className="flex justify-between px-2 py-4 border mb-4 flex-1 rounded-lg hover:border-slate-500 text-sm md:text-base">
//               <span className="font-medium">RN{report.reportNo}</span>
//               <span>{report.name}</span>
//               <span>{report.date}</span>
//               <span>
//                 <MdKeyboardArrowRight className="h-6 w-6 text-gray-400" />
//               </span>
//             </li>
//           </Link>
//         ))
//       ) : (
//         <div>There are no reports to display.</div>
//       )}
//     </ul>
//   );
// };
