// interface ReportProps {
//   reports: Array<Reports>;
// }

// export const ReportPages: React.FC<ReportProps> = ({ reports }) => {
//   return (
//     <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
//       {reports.map((report) => (
//         <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
//           <div className="px-4 py-5 sm:px-6">
//             <div key={report.id} id={report.id}>
//               Report
//             </div>
//           </div>
//           <div className="px-4 py-5 sm:p-6">
//             <div>Date:{report.date}</div>
//             <div>Customer Name:{report.name}</div>
//             <div>Description of Work:{report.work}</div>
//             <div>Actions Performed:{report.actions}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
import { Button } from "../component/button";
import { useNavigate } from "react-router-dom";

export const ReportPages = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };
  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between mb-2">
        <div>
          <Button onClick={returnToHome}>Go Back</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"primary"}>Edit</Button>
          <Button variant={"danger"}>Delete</Button>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <div>Report</div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>Date:</div>
          <div>Customer Name:</div>
          <div>Description of Work:</div>
          <div>Actions Performed:</div>
        </div>
      </div>
    </div>
  );
};
