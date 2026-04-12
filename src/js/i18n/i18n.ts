import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

// Supported languages
export const supportedLanguages = [
  'en',
  'ar',
  'be',
  'ru',
  'fr',
  'de',
  'es',
  'zh',
  'zh-TW',
  'vi',
  'tr',
  'id',
  'it',
  'pt',
  'nl',
  'da',
  'sv',
  'ko',
] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  ar: 'العربية',
  be: 'Беларуская',
  ru: 'Русский',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  zh: '中文',
  'zh-TW': '繁體中文（台灣）',
  vi: 'Tiếng Việt',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  da: 'Dansk',
  sv: 'Svenska',
  ko: '한국어',
};

/**
 * Resolve the active language from localStorage → browser preferences → env
 * fallback.  URL path-based locale detection is intentionally omitted so this
 * function works identically in the SPA (Tauri) and web contexts.
 */
export const getLanguage = (): SupportedLanguage => {
  const storedLang = localStorage.getItem('i18nextLng');
  if (
    storedLang &&
    supportedLanguages.includes(storedLang as SupportedLanguage)
  ) {
    return storedLang as SupportedLanguage;
  }

  // Check browser language preferences
  if (typeof navigator !== 'undefined' && navigator.languages) {
    for (const lang of navigator.languages) {
      if (supportedLanguages.includes(lang as SupportedLanguage)) {
        return lang as SupportedLanguage;
      }

      const primaryLang = lang.split('-')[0];
      if (supportedLanguages.includes(primaryLang as SupportedLanguage)) {
        return primaryLang as SupportedLanguage;
      }
    }
  }

  const envLang = import.meta.env?.VITE_DEFAULT_LANGUAGE;
  if (envLang && supportedLanguages.includes(envLang as SupportedLanguage)) {
    return envLang as SupportedLanguage;
  }

  return 'en';
};

/** @deprecated Use getLanguage() — URL-based locale detection removed for SPA/Tauri. */
export const getLanguageFromUrl = getLanguage;

let initialized = false;

export const initI18n = async (): Promise<typeof i18next> => {
  if (initialized) return i18next;

  const currentLang = getLanguage();

  localStorage.setItem('i18nextLng', currentLang);

  await i18next.use(HttpBackend).init({
    lng: currentLang,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages as unknown as string[],
    ns: ['common', 'tools'],
    defaultNS: 'common',
    preload: [currentLang],
    backend: {
      loadPath: `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

  await i18next.loadNamespaces('tools');

  initialized = true;
  return i18next;
};

export const t = (key: string, options?: Record<string, unknown>): string => {
  return i18next.t(key, options);
};

/**
 * Change the active language.  In SPA/Tauri mode this re-applies translations
 * to the current view in-place — no page reload or URL navigation required.
 */
export const changeLanguage = async (lang: SupportedLanguage): Promise<void> => {
  if (!supportedLanguages.includes(lang)) return;
  localStorage.setItem('i18nextLng', lang);
  await i18next.changeLanguage(lang);
  applyTranslations();
};

// Apply translations to all elements with data-i18n attribute
export const applyTranslations = (): void => {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = t(key);
      if (translation && translation !== key) {
        element.textContent = translation;
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (key && element instanceof HTMLInputElement) {
      const translation = t(key);
      if (translation && translation !== key) {
        element.placeholder = translation;
      }
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    if (key) {
      const translation = t(key);
      if (translation && translation !== key) {
        (element as HTMLElement).title = translation;
      }
    }
  });

  document.documentElement.lang = i18next.language;
  document.documentElement.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';
};

/**
 * No-op in SPA/Tauri mode — there are no href links to rewrite because
 * navigation is handled by the client-side router.
 *
 * @deprecated — kept for API compatibility; safe to call but does nothing.
 */
export const rewriteLinks = (): void => {
  // In SPA mode navigation is hash-based — no link rewriting needed.
};

export default i18next;
