import { useEffect, useState } from 'react';
import i18next from 'i18next';

type Lang = 'es' | 'en';

const normalizeLang = (value: string | undefined): Lang => (value?.startsWith('en') ? 'en' : 'es');

export function useAppTranslation() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const rerender = () => forceRender((v) => v + 1);

    i18next.on('languageChanged', rerender);
    window.addEventListener('app:lang-change', rerender as EventListener);

    return () => {
      i18next.off('languageChanged', rerender);
      window.removeEventListener('app:lang-change', rerender as EventListener);
    };
  }, []);

  const rootLang = typeof document !== 'undefined' ? document.documentElement.lang : undefined;
  const lang = normalizeLang(i18next.language || rootLang);
  const canTranslate = isHydrated && i18next.isInitialized;

  const t = (key: string, fallback: string) => (canTranslate ? i18next.t(key) : fallback);

  return { t, lang, canTranslate };
}
