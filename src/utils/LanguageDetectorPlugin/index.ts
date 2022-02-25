import { LanguageDetectorAsyncModule } from 'i18next';
import { findBestAvailableLanguage } from 'react-native-localize';
import { languages } from '~/services/i18n/translations';
import { DeviceStorageKeys, SettingsLanguage } from '~/types';
import { DeviceStorage } from '~/utils/DeviceStorage';

const STORE_KEY: DeviceStorageKeys = 'settingsLanguage';

export const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  async detect(callback: (lang: string) => void) {
    try {
      const storedLanguage = await DeviceStorage.getData(STORE_KEY);
      if (storedLanguage) return callback(storedLanguage);
      const language = findBestAvailableLanguage(Object.keys(languages));
      if (language) return callback(language.languageTag);
      return callback(languages.en);
    } catch (error) {
      return callback(languages.en);
    }
  },
  async cacheUserLanguage(language: SettingsLanguage) {
    await DeviceStorage.storeData(STORE_KEY, language);
  },
};
