import Config from 'react-native-config';
import { Environment } from '~/types';

const environment: Environment = {
  environment: Config.ENVIRONMENT as Environment['environment'],
  apiUrl: Config.API_URL,
};

export default environment;
