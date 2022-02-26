import {
  useMutation as useReactMutation,
  UseMutationOptions,
} from 'react-query';
import api from '~/services/api';
import {
  Headers,
  MutationRequest,
  MutationResponse,
  MutationResult,
} from '~/types';

interface OptionalProps {
  url?: string;
  headers?: Headers;
}

type Options<T, F> =
  | UseMutationOptions<MutationResponse<T>, Error, MutationRequest<F>>
  | undefined;

export default function useMutation<T, F = undefined>(
  key: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  { url = '', headers }: OptionalProps = {},
  options: Options<T, F> = {},
): MutationResult<MutationResponse<T>, MutationRequest<F>> {
  return useReactMutation<MutationResponse<T>, Error, MutationRequest<F>>(
    key,
    (request) => {
      return api[method](`${url}${request.url || ''}`, request.data, {
        headers,
      });
    },
    options,
  );
}
