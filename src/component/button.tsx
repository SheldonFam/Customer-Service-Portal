import { clsx } from "clsx";
import * as React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  shape?: "round" | "circle" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "twoTone" | "plain" | "default";
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      size = "lg",
      shape = "round",
      variant = "default",
      block,
      className,
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

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          "font-medium bg-green-600 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
          {
            round: "rounded-md",
            circle: "rounded-full",
            none: "rounded-none",
          }[shape],
          getButtonSize(),
          block && "w-full"
        )}
        {...rest}
      >
        Button
      </button>
    );
  }
);
