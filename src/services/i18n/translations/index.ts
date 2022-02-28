import { LanguageResources } from '~/types';
import en from './en';
import pt from './pt';

const getLanguage = (name: keyof LanguageResources) => name;

export const fallbackLng = getLanguage('en');

export const resources: LanguageResources = {
  en,
  pt,
};
