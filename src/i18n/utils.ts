import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** The current path with the lang prefix stripped, e.g. always "/gcms-analyzer/"
 * regardless of locale. */
export function getBareCurrentPath(url: URL): string {
  return url.pathname.replace(/^\/pt(\/|$)/, "/");
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang) {
    return targetLang === defaultLang ? path : `/${targetLang}${path}`;
  };
}
