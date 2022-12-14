import clsx from "clsx";
import * as React from "react";

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  // name: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ label, className, ...rest }, forwardedRef) {
    const autoId = React.useId();
    const appliedId = rest.id || rest.name || autoId;
    return (
      <div>
        <label htmlFor={appliedId}>{label}</label>
        <input
          type="text"
          id={appliedId}
          className={clsx(
            "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            className
          )}
          ref={forwardedRef}
          {...rest}
        />
      </div>
    );
  }
);
