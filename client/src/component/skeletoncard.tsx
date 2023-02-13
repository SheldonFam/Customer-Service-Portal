import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
  return (
    <li className="border rounded-lg px-6 py-4 mb-4 hover:border-slate-500 text-xs md:text-base list-none">
      <Skeleton />
    </li>
  );
};
