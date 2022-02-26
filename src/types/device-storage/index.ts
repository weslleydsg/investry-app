import { LanguageResources } from '../i18n';

export type SettingsLanguage = keyof LanguageResources;

export interface DeviceStorageData {
  settingsLanguage: SettingsLanguage;
}

export type DeviceStorageKeys = keyof DeviceStorageData;
