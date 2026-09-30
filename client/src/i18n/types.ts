export type Lang = "de" | "en";

export type LocalizedString = {
  en: string;
  de: string;
};

export function pick(value: LocalizedString | string, lang: Lang): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}
