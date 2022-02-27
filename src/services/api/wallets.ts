import useFetch from '~/hooks/useFetch';
import { Wallets } from '~/types';

export const GetWallets = () => {
  return useFetch<Wallets>(
    'wallets',
    'v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653',
    {},
    { staleTime: Infinity },
  );
};
