import { ACCEPTED_LOCALES } from "@/config/i18n-locales";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ACCEPTED_LOCALES,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|fr)/:path*"], // ["/", `/(${ACCEPTED_LOCALES.join("|")})/:path*`], // for it to look like this ["/", "/(en|fr)/:path*"],
};
