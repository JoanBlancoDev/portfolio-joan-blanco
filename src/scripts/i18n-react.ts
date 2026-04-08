import i18next from 'i18next';
import { translations } from '../constants/translations';

if (!i18next.isInitialized) {
  const initialLang = typeof document !== 'undefined' && document.documentElement.lang.startsWith('en') ? 'en' : 'es';

  i18next.init({
    resources: {
      es: { translation: translations.es },
      en: { translation: translations.en },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    lng: initialLang,
    interpolation: { escapeValue: false },
  });
}

export default i18next;