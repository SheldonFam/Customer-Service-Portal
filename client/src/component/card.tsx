import * as React from "react";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  function Card({}) {
    return (
      <div className="border">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Title</h3>
        </div>
        <div className="items-center px-4 py-10 ">
          <p>Content</p>
        </div>
      </div>
    );
  }
);
