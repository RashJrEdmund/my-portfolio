"use client";

import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { Typewriter } from "react-simple-typewriter";

type writerFn = () => void;

interface Props extends ComponentProps<"span"> {
  writerOptions: {
    words: string[];
    loop?: number | boolean;
    cursor?: boolean;
    cursorStyle?: React.ReactNode;
    cursorBlinking?: boolean;
    cursorColor?: string;
    typeSpeed?: number;
    delaySpeed?: number;
    deleteSpeed?: number;
    onLoopDone?: writerFn;
    onDelay?: writerFn;
    onDelete?: writerFn;
    onType?: (count: number) => void;
  }
}

function DynamicText({ className, writerOptions, ...restProps }: Props) {
  return (
    <span
      {...restProps}
      className={cn("text-nowrap", className || "")}
    >
      <Typewriter
        words={writerOptions.words || []}
        loop={writerOptions?.loop ?? 5}
        cursor={writerOptions?.cursor ?? true}
        cursorStyle={writerOptions?.cursorStyle ?? "|"}
        cursorColor={writerOptions?.cursorColor}
        cursorBlinking={writerOptions?.cursorBlinking ?? true}
        typeSpeed={writerOptions?.typeSpeed ?? 70}
        deleteSpeed={writerOptions?.deleteSpeed ?? 50}
        delaySpeed={writerOptions?.delaySpeed ?? 1000}

        onLoopDone={writerOptions?.onLoopDone}
        onDelay={writerOptions?.onDelay}
        onType={writerOptions?.onType}
        onDelete={writerOptions?.onDelete}
      />
    </span>
  );
};

export {
  DynamicText
};
