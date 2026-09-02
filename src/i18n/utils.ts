import { ui, defaultLang, type Lang } from "./ui";

/** Strips the site's base path ("/" locally, "/CatalIza/" on GitHub Pages)
 * from a pathname, since Astro.url.pathname includes it but our lang/route
 * logic works in terms of base-free paths. */
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  if (base !== "/" && pathname.startsWith(base)) {
    return "/" + pathname.slice(base.length);
  }
  return pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = stripBase(url.pathname).split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** The current path with the base and the lang prefix both stripped, e.g.
 * always "/gcms-analyzer/" regardless of locale or where the site is hosted. */
export function getBareCurrentPath(url: URL): string {
  return stripBase(url.pathname).replace(/^\/pt(\/|$)/, "/");
}

/**
 * Builds the equivalent path in another language, given a path already
 * stripped of its lang prefix, prefixed with the site's base path so links
 * work both locally and on GitHub Pages.
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang) {
    const base = import.meta.env.BASE_URL;
    const baseNoTrailingSlash = base.endsWith("/") ? base.slice(0, -1) : base;
    const localePath = targetLang === defaultLang ? path : `/${targetLang}${path}`;
    return baseNoTrailingSlash + localePath;
  };
}
