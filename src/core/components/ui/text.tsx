import { cn } from "@/lib/utils";
import { ComponentProps, MouseEventHandler } from "react";

interface Props extends ComponentProps<any> {
  hideAnimation?: boolean;
  animationStyles?: string;
  className?: string;
  onClick?: MouseEventHandler;
  as?: keyof JSX.IntrinsicElements;
}

function Text({ children, as: Element = "button", className = "", hideAnimation = false, animationStyles = "", ...restProps }: Props) {
  return (
    <Element
      {...restProps}
      className={cn("relative z-[3] group inline-block text-nowrap outline outline-1 outline-app-blue-500 bg-transparent text-app-text-500 px-4 py-1 sm:px-6 sm:py-3 cursor-pointer", className)}
    >
      {!hideAnimation ? (
        <span
          className={cn("absolute top-0 left-0 z-[-1] h-full w-0 group-hover:w-full duration-300 bg-app-blue-500", animationStyles)}
        />
      ) : null}
      {children}
    </Element>
  );
};

export {
  Text,
};
