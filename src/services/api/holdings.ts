import useFetch from '~/hooks/useFetch';
import { Holdings } from '~/types';

export const GetHoldings = () => {
  return useFetch<Holdings>(
    'holdings',
    'v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653',
    {},
    { staleTime: Infinity },
  );
};
