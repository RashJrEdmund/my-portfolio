import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  //
}

function SmallLineSvg({ className, ...restProps }: Props) {
  return (
    <svg
      {...restProps}
      className={cn("inline", className || "")}
      width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.05079" x2="50" y2="1.05079" stroke="#0F5EF5" stroke-width="1.89842" />
    </svg>
  );
}

export {
  SmallLineSvg,
};
