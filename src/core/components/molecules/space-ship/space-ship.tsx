"use client";

import { DynamicText } from "@/components/ui/dynamic-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function SpaceShip({
  className = "",
  imgSx = "",
}: {
  className?: string;
  imgSx?: string;
}) {
  const [shipSrc, setSpiSrc] = useState<string>("/space-craft-idling.svg");
  const [engineStarted, setEngineStarted] = useState<boolean>(false);

  const [dragConstraints, setDragConstraints] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const startEngine = () => {
    setSpiSrc("/space-craft.svg");
    setEngineStarted(true);
  };

  const StopEngine = () => {
    setSpiSrc("/space-craft-idling.svg");
    setEngineStarted(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    setDragConstraints({
      top: -(window.innerHeight * 1.8),
      bottom: window.innerHeight * 3.8,
      left: -window.innerWidth * 0.4,
      right: window.innerWidth * 0.4,
    });
  }, []);

  return (
    <motion.div
      className={cn(
        "relative z-[8] w-[200px] h-[220px] rounded-2xl mx-auto bg-transparent flex items-center justify-center text-center",
        className
      )}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={dragConstraints}
      onFocus={startEngine}
      onBlur={StopEngine}
      onDirectionLock={(axis) => {
        console.log({ axis });
      }}
      // onUpdate={(latest) => {
      //   console.log({ latest });

      //   if (+latest.y < 0 ) {
      //     setRotation("180deg");
      //   } else {
      //     setRotation("0deg")
      //   }
      // }}
    >
      <DynamicText
        writerOptions={{
          words: [
            "Hi there!",
            "We could do great things together",
            "Only if we worked as a team",
            "So let's work",
          ],
          loop: 2,
          cursorStyle: "_",
        }}
        className="absolute top-[-10px] left-[50%] font-light text-[0.7rem] sm:text-[1rem] bg-white text-app-dark-700 rounded-sm p-[5px]"
      />

      <Image
        src={shipSrc}
        alt="space craft. sky's not even the limit, if we work together"
        height={100}
        width={100}
        className={cn(
          "absolute z-30 top-0 left-[50%] translate-x-[-50%] w-[200px]",
          imgSx
        )}
        draggable={false}
        title={
          engineStarted ? "Blur out to stop engine" : "Click to start engine"
        }
        data-testid="space-ship"
      />
    </motion.div>
  );
}

export { SpaceShip };
