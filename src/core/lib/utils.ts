import { ACCEPTED_LOCALES, type AcceptedLocales } from "@/i18n/i18n-constants";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getValidLocale = (locale: AcceptedLocales) => {
  return ACCEPTED_LOCALES.includes(locale) ? locale : "en"; // default locale
};

export {
  cn,
  getValidLocale,
};
