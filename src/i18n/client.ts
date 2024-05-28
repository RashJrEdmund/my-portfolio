"use client";

import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import("./en/home-page"),
  fr: () => import("./fr/home-page"),
});

// function languageData() {
//   return Promise.resolve({
//     banner: {
//       welcome: "Hello, I'm Orashus {{name}}!",
//     }
//   });
// }

// export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
//   en: languageData,
//   fr: languageData,
// });
