import clsx from "clsx";
import * as React from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, name, value, placeholder, ...rest }, forwardedRef) {
    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          name={name}
          id={name}
          className={clsx(
            "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          )}
          value={value}
          placeholder={placeholder}
          ref={forwardedRef}
          {...rest}
        />
      </div>
    );
  }
);
