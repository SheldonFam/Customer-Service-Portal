import clsx from "clsx";
import * as React from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
  placeholder: string;
  value?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { name, placeholder, value, children, ...rest },
    forwardedRef
  ) {
    return (
      <div>
        <label className="block text-sm font-medium text-blue-700">
          {name}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name={name}
            id={name}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={placeholder}
            value={value}
            ref={forwardedRef}
            {...rest}
          />
        </div>
      </div>
    );
  }
);
