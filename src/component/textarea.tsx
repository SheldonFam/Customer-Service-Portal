import * as React from "react";
import clsx from "clsx";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  // name: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, className, ...rest }, forwadedRef) {
    const autoId = React.useId();
    const appliedId = rest.id || rest.name || autoId;
    return (
      <div>
        <label htmlFor={appliedId}>{label}</label>
        <div className="mt-1">
          <textarea
            rows={4}
            id={appliedId}
            className={clsx(
              "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            )}
            ref={forwadedRef}
            {...rest}
          />
        </div>
      </div>
    );
  }
);
