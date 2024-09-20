import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"h3"> {
  as?: keyof JSX.IntrinsicElements;
}

function SectionHeader({ as: Tag = "h3", className, ...restProps }: Props) {
  return (
    <Tag
      {...(restProps as unknown as {})}
      className={cn(
        "font-semibold text-[1.3rem] md:text-[2rem] w-fit mx-auto",
        className
      )}
    />
  );
}

export { SectionHeader };
