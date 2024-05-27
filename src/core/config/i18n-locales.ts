const ACCEPTED_LOCALES = [
  "en",
  "fr"
] as const;

type AcceptedLocales = typeof ACCEPTED_LOCALES[number];

export type {
  AcceptedLocales
};

export {
  ACCEPTED_LOCALES,
};
