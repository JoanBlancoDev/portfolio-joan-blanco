import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

type Lang = 'es' | 'en';

type TranslationMap = Record<Lang, Record<string, string>>;

declare global {
  interface Window {
    applyLanguage?: () => void;
    toggleLanguage?: () => void | Promise<void>;
    i18next?: typeof i18next;
  }
}

export const initI18n = (translations: TranslationMap) => {
  const root = document.documentElement;
  window.i18next = i18next;

  const resources = {
    es: { translation: translations.es },
    en: { translation: translations.en },
  };

  if (!i18next.isInitialized) {
    i18next
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        interpolation: { escapeValue: false },
        detection: {
          order: ['localStorage', 'navigator'],
          lookupLocalStorage: 'lang',
          caches: ['localStorage'],
        },
      });
  }

  const normalizeLang = (value: string | undefined): Lang =>
    value?.startsWith('en') ? 'en' : 'es';

  const getPreferredLang = (): Lang => {
    const saved = localStorage.getItem('lang') ?? undefined;
    if (saved) return normalizeLang(saved);
    return normalizeLang(navigator.language);
  };

  const syncRootLang = () => {
    const lang = normalizeLang(i18next.language);
    root.dataset.lang = lang;
    root.lang = lang;
    return lang;
  };

  window.applyLanguage = () => {
    const lang = syncRootLang();
    const t = i18next.getFixedT(lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      const value = t(key);
      if (value) el.setAttribute('aria-label', value);
    });

    const languageToggle = document.getElementById('lang-toggle');
    if (languageToggle) {
      languageToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }
  };

  window.toggleLanguage = async () => {
    const current = normalizeLang(i18next.language);
    const nextLang: Lang = current === 'es' ? 'en' : 'es';
    await i18next.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang);
    window.applyLanguage?.();
    window.dispatchEvent(new CustomEvent('app:lang-change', { detail: { lang: nextLang } }));
  };

  const bindToggleButton = () => {
    const langToggle = document.getElementById('lang-toggle');
    if (!(langToggle instanceof HTMLButtonElement)) return;

    if (langToggle.dataset.i18nBound === 'true') return;
    langToggle.dataset.i18nBound = 'true';

    langToggle.addEventListener('click', () => {
      window.toggleLanguage?.();
    });
  };

  const run = async () => {
    const preferred = getPreferredLang();
    if (normalizeLang(i18next.language) !== preferred) {
      await i18next.changeLanguage(preferred);
    }

    syncRootLang();
    bindToggleButton();
    window.applyLanguage?.();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      void run();
    }, { once: true });
  } else {
    void run();
  }
};
