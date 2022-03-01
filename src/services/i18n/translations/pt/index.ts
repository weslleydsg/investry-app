import { LanguageRecourse } from '~/types';
import app from './app';
import common from './common';
import glossary from './glossary';
import navigate from './navigate';

const resource: LanguageRecourse = {
  common,
  app,
  navigate,
  glossary,
};

export default resource;
