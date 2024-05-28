import { ACCEPTED_LOCALES, type AcceptedLocales } from "@/i18n/i18n-constants";

const getValidLocale = (locale: AcceptedLocales) => {
  return ACCEPTED_LOCALES.includes(locale) ? locale : "en"; // default locale
};

export {
  getValidLocale,
};
