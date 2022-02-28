import { LanguageRecourse } from '~/types';
import app from './app';
import glossary from './glossary';
import navigate from './navigate';

const resource: LanguageRecourse = {
  app,
  navigate,
  glossary,
};

export default resource;
