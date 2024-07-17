import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function waitAndResolve<T>(data: T, time: number = 100) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export { cn, waitAndResolve };
