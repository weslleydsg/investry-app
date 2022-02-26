import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { Headers, QueryResult } from '~/types';
import api from '~/services/api';

interface OptionalProps {
  headers?: Headers;
  params?: { [key: string]: unknown };
}

type Options<T> =
  | UseQueryOptions<QueryResult<T>, Error, UseQueryResult<T, Error>>
  | undefined;

export default function useFetch<T>(
  key: string,
  url: string,
  { headers, params }: OptionalProps = {},
  options: Options<T> = {},
): QueryResult<T> {
  return useQuery<QueryResult<T>, Error, UseQueryResult<T, Error>>(
    key,
    () => api.get(url, { headers, params }),
    options,
  );
}
