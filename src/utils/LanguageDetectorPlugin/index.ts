import { LanguageDetectorAsyncModule } from 'i18next';
import { findBestAvailableLanguage } from 'react-native-localize';
import { fallbackLng, resources } from '~/services/i18n/translations';
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
      const language = findBestAvailableLanguage(Object.keys(resources));
      if (language) return callback(language.languageTag);
      return callback(fallbackLng);
    } catch (error) {
      return callback(fallbackLng);
    }
  },
  async cacheUserLanguage(language: SettingsLanguage) {
    await DeviceStorage.storeData(STORE_KEY, language);
  },
};
