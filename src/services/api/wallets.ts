import environment from '~/config/environment';
import useFetch from '~/hooks/useFetch';
import { Wallets } from '~/types';

export const GetWallets = () => {
  return useFetch<Wallets>(
    'wallets',
    `v3/${environment.walletEndpoint}`,
    {},
    { staleTime: Infinity },
  );
};
