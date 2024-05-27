import { ACCEPTED_LOCALES, type AcceptedLocales } from "@/config/i18n-locales";

const getValidLocale = (locale: AcceptedLocales) => {
  return ACCEPTED_LOCALES.includes(locale) ? locale : "en"; // default locale
};

export {
  getValidLocale,
};
