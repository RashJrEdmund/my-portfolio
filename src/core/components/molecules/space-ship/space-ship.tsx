"use client";

import { DynamicText } from "@/components/ui/dynamic-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function SpaceShip({ className = "", imgSx = "" }: { className?: string; imgSx?: string }) {
  const [shipSrc, setSpiSrc] = useState<string>("/space-craft-idling.svg");

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className={cn("z-[4] w-fit h-fit rounded-2xl mx-auto bg-transparent flex items-center justify-center text-center", className)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={{
        top: -(window.innerHeight * 1.5), bottom: window.innerHeight,
        left: -window.innerWidth * 0.4, right: window.innerWidth * 0.4
      }}
      onFocus={() => {
        setSpiSrc("/space-craft.svg");
      }}
      onBlur={() => {
        setSpiSrc("/space-craft-idling.svg");
      }}
    >
      <DynamicText
        writerOptions={{
          words: ["let's goOO! 😅", "sky's not even a limit", "if we work", "so let's work"],
          loop: 2,
          cursorStyle: "_"
        }}
        className="absolute top-[-10px] left-[50%] font-light text-[0.7rem] sm:text-[1rem] bg-white text-app-dark-600 rounded-sm p-[5px]"
      />

      <Image
        src={shipSrc}
        alt="space craft. sky's not even the limit"
        height={100}
        width={100}
        className={cn("w-[200px]", imgSx)}
        draggable={false}
      />
    </motion.div>
  );
};

export {
  SpaceShip,
};
