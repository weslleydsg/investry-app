import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import environment from '~/config/environment';
import { languageDetectorPlugin } from '~/utils/LanguageDetectorPlugin';
import { fallbackLng, resources } from './translations';

i18n
  .use(languageDetectorPlugin)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng,
    ns: ['navigate', 'app'],
    defaultNS: 'app',
    fallbackNS: 'common',
    debug: environment.environment === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
