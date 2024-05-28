import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
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

// export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
//   en: languageData,
//   fr: languageData,
// } as any);
