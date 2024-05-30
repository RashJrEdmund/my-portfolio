"use client";

import { DynamicText } from "@/components/ui/dynamic-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

function SpaceShip({ className = "", imgSx = "" }: { className?: string; imgSx?: string }) {
  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className={cn("absolute z-[4] w-fit h-fit rounded-2xl bg-transparent flex items-center justify-center text-center", className)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="y"
      dragConstraints={{ top: -window.innerHeight, bottom: window.innerHeight }}
    >
      <DynamicText
        writerOptions={{
          words: ["let's goOO! 😅", "sky's not even a limit", "if we work"],
          loop: true,
          cursorStyle: "_"
        }}
        className="absolute top-[-10px] left-[50%] font-light text-[0.7rem] sm:text-[1rem] bg-white text-app-dark-600 rounded-sm p-[5px]"
      />

      <Image
        src="space-craft.svg"
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
