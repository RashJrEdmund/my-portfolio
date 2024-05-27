/** see these docs for guide to setup i18n
 * https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing
*/

import { ACCEPTED_LOCALES, type AcceptedLocales } from "@/config/i18n-locales";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!ACCEPTED_LOCALES.includes(locale as AcceptedLocales)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
