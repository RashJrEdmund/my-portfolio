import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { ACCEPTED_LOCALES, type AcceptedLocales } from "./i18n/i18n-constants";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!ACCEPTED_LOCALES.includes(locale as AcceptedLocales)) notFound();

  return {
    messages: (await import(`../i18n/${locale}/index.ts`)).default // from public folder
  };
});
