import clsx from "clsx";
import * as React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  shape?: "round" | "circle" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "twoTone" | "plain" | "default";
  block?: boolean;
  active?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      size = "md",
      shape = "round",
      variant = "solid",
      block,
      className,
      active,
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

    const disabledClass = "opacity-50 cursor-not-allowed";

    const solidColor = () => {
      const btn = {
        bgColor: active ? `bg-green-700` : `bg-green-600`,
        textColor: "text-white",
        hoverColor: active ? "" : `hover:bg-green-500`,
        activeColor: `active:bg-green-700`,
      };
      return getBtnColor(btn);
    };

    const twoToneColor = () => {
      const btn = {
        bgColor: active
          ? `bg-green-200 dark:bg-green-50`
          : `bg-green-50 dark:bg-green-500 dark:bg-opacity-20`,
        textColor: `text-primary-600 dark:text-primary-50`,
        hoverColor: active
          ? ""
          : `hover:bg-green-100 dark:hover:bg-green-500 dark:hover:bg-opacity-30`,
        activeColor: `active:bg-green-200 dark:active:bg-green-500 dark:active:bg-opacity-40`,
      };
      return getBtnColor(btn);
    };

    const defaultColor = () => {
      const btn = {
        bgColor: active
          ? `bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500`
          : `bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700`,
        textColor: `text-gray-600 dark:text-gray-100`,
        hoverColor: active ? "" : `hover:bg-gray-50 dark:hover:bg-gray-600`,
        activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
      };
      return getBtnColor(btn);
    };

    const plainColor = () => {
      const btn = {
        bgColor: active
          ? `bg-gray-100 dark:bg-gray-500`
          : "bg-transparent border border-transparent",
        textColor: `text-gray-600 dark:text-gray-100`,
        hoverColor: active ? "" : `hover:bg-gray-50 dark:hover:bg-gray-600`,
        activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
      };
      return getBtnColor(btn);
    };

    const getBtnColor = ({
      bgColor,
      hoverColor,
      activeColor,
      textColor,
    }: {
      bgColor: string;
      hoverColor: string;
      activeColor: string;
      textColor: string;
    }) => {
      return `${bgColor} ${
        disabled ? disabledClass : hoverColor + " " + activeColor
      } ${textColor}`;
    };

    const btnColor = () => {
      switch (variant) {
        case "solid":
          return solidColor();
        case "twoTone":
          return twoToneColor();
        case "plain":
          return plainColor();
        default:
          return defaultColor();
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
          getButtonSize(),
          block && "w-full"
        )}
        {...rest}
        disabled={disabled}
      >
        Button
      </button>
    );
  }
);
