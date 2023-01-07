import * as React from "react";
import { CloseButton } from "./close-button";

export interface DialogProps extends React.ComponentPropsWithoutRef<"div"> {
  open: boolean;
  // onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  function Dialog({ open, children, title, ...props }, forwardRef) {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 bg-gray-500 opacity-95"
        {...props}
        ref={forwardRef}
      >
        <div className="fixed bg-white p-6 rounded shadow top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[450px] max-h-screen">
          <div className="mb-4">
            <h1>{title}</h1>
          </div>
          <div>{children}</div>
          <div className="absolute top-6 right-4 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-200">
            <CloseButton />
          </div>
        </div>
      </div>
    );
  }
);
