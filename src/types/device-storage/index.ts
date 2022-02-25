export interface Language {
  en: 'en';
  pt: 'pt';
}

export type SettingsLanguage = keyof Language;

export interface DeviceStorageData {
  settingsLanguage: SettingsLanguage;
}

export type DeviceStorageKeys = keyof DeviceStorageData;
