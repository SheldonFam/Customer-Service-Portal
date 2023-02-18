import clsx from "clsx";
import * as React from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, className, ...rest }, forwardedRef) {
    const autoId = React.useId();
    const appliedId = rest.id || rest.name || autoId;
    return (
      <div>
        <label htmlFor={appliedId} className="text-xs md:text-base">
          {label}
        </label>
        <input
          type="text"
          id={appliedId}
          className={clsx(
            "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  text-xs md:text-base",
            className
          )}
          ref={forwardedRef}
          {...rest}
        />
      </div>
    );
  }
);
