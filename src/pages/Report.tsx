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

export const ReportPages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
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
