import { clsx } from "clsx";
import * as React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  shape?: "round" | "circle" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "white" | "default";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, size = "md", shape, variant = "default", ...rest },
    forwardedRef
  ) {
    return (
      <button
        ref={forwardedRef}
        type="button"
        className={clsx(
          "mx-4 font-medium focus:outline-none flex items-center justify-center",
          {
            xl: " px-6 py-3 text-lg",
            lg: " px-4 py-2 text-lg",
            sm: " px-3 py-2 text-sm",
            xs: " px-2.5 py-1.5 text-xs",
            md: " text-base px-4 py-2",
          }[size],
          {
            primary:
              "bg-green-600 text-white hover:bg-green-700 active:bg-green-700",
            secondary:
              "bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-200",
            white: "bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
            default:
              "bg-gray-100 text-gray-600 hover:bg-gray-50 active:bg-gray-100",
          }[variant],

          shape &&
            {
              round: "rounded-md",
              circle: "rounded-full",
              none: "rounded-none",
            }[shape]
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
