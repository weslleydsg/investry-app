import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { waitFor } from 'test-utils';
import { mockedApi } from '~/services/api/__mocks__/api.mock';
import { queryClient } from '~/services/queryClient';
import useMutation from '.';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useMutation', () => {
  afterAll(() => {
    queryClient.clear();
    mockedApi.reset();
  });

  it('gets successfully', async () => {
    const responseData = {
      fakeData: { fakeProperty: 'fakeValue' },
    };
    mockedApi.onGet('/path/sub/path').reply(200, responseData);
    const { result } = renderHook(
      () => useMutation('key', 'get', { url: '/path' }),
      { wrapper },
    );
    await waitFor(async () => {
      const response = await result.current.mutateAsync({
        data: undefined,
        url: '/sub/path',
      });
      expect(response.data).toEqual(responseData);
    });
  });

  it('posts successfully', async () => {
    const responseData = {
      fakeData: { fakeProperty: 'fakeValue' },
    };
    mockedApi.onPost('/path').reply(200, responseData);
    const { result } = renderHook(
      () => useMutation('key', 'post', { url: '/path' }),
      { wrapper },
    );
    await waitFor(async () => {
      const response = await result.current.mutateAsync({ data: undefined });
      expect(response.data).toEqual(responseData);
    });
  });

  it('patches successfully', async () => {
    const responseData = {
      fakeData: { fakeProperty: 'fakeValue' },
    };
    mockedApi.onPatch('/path').reply(200, responseData);
    const { result } = renderHook(() => useMutation('key', 'patch'), {
      wrapper,
    });
    await waitFor(async () => {
      const response = await result.current.mutateAsync({
        data: undefined,
        url: '/path',
      });
      expect(response.data).toEqual(responseData);
    });
  });

  it('deletes successfully', async () => {
    const responseData = {
      fakeData: { fakeProperty: 'fakeValue' },
    };
    mockedApi.onDelete('/path').reply(200, responseData);
    const { result } = renderHook(
      () => useMutation('key', 'delete', { url: '/path' }),
      { wrapper },
    );
    await waitFor(async () => {
      const response = await result.current.mutateAsync({
        data: undefined,
      });
      expect(response.data).toEqual(responseData);
    });
  });
});
