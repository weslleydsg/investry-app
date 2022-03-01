export interface Environment {
  environment: 'development' | 'staging' | 'production';
  apiUrl: string;
  walletEndpoint: string;
}
