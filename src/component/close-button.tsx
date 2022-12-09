import { clsx as classNames } from "clsx";
import * as React from "react";
import { HiX } from "react-icons/hi";

export interface CloseButtonProps
  extends React.ComponentPropsWithoutRef<"span"> {
  svgClass?: string;
}

export const CloseButton = React.forwardRef<HTMLSpanElement, CloseButtonProps>(
  function CloseButton({ svgClass, ...rest }, ref) {
    return (
      <span role="button" {...rest} ref={ref}>
        <HiX className={svgClass} />
      </span>
    );
  }
);
