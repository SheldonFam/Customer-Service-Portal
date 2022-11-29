import { clsx } from "clsx";
import * as React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  shape?: "round" | "circle" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "twoTone" | "plain" | "default";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children = "Button",
      size = "md",
      shape = "round",
      variant = "solid",
      className,
      disabled,
      ...rest
    },
    ref
  ) {
    const buttonSize = size;

    const getButtonSize = () => {
      let sizeClass = "";
      switch (buttonSize) {
        case "xl":
          sizeClass = clsx(
            "h-16 items-center justify-center px-10 py-2 text-xl"
          );
          break;
        case "lg":
          sizeClass = clsx(
            "h-14 items-center justify-center px-8 py-2 text-lg"
          );
          break;
        case "sm":
          sizeClass = clsx(
            "h-9  items-center justify-center  px-3 py-2 text-sm"
          );
          break;
        case "xs":
          sizeClass = clsx(
            "h-7  items-center justify-center px-3 py-1 text-xs"
          );
          break;
        default:
          sizeClass = clsx(
            "h-11 items-center justify-center text-base px-8 py-2"
          );
          break;
      }
      return sizeClass;
    };

    const btnColor = () => {
      switch (variant) {
        case "solid":
          return "bg-green-700 text-white hover:bg-green-500 active:bg-green-700";
        case "twoTone":
          return "bg-green-200 text-green-700 hover:bg-green-100 active:bg-green-200";
        case "plain":
          return "bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100";
        default:
          return "bg-gray-100 text-gray-600 hover:bg-gray-50 active:bg-gray-100";
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          "font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-200 whitespace-nowrap",
          btnColor(),
          {
            round: "rounded-md",
            circle: "rounded-full",
            none: "rounded-none",
          }[shape],
          getButtonSize()
        )}
        {...rest}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
