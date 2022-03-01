import Config from 'react-native-config';
import { Environment } from '~/types';

const environment: Environment = {
  environment: Config.ENVIRONMENT as Environment['environment'],
  apiUrl: Config.API_URL,
  walletEndpoint: Config.WALLET_ENDPOINT,
};

export default environment;
