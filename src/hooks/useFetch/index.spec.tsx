import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { mockedApi } from '~/services/api/__mocks__/api.mock';
import { queryClient } from '~/services/queryClient';
import useFetch from '.';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useFetch', () => {
  afterAll(() => {
    queryClient.clear();
    mockedApi.reset();
  });

  it('fetches successfully', async () => {
    const responseData = {
      fakeData: { fakeProperty: 'fakeValue' },
    };
    mockedApi.onGet('/get/path').reply(200, responseData);
    const { waitFor, result } = renderHook(() => useFetch('key', '/get/path'), {
      wrapper,
    });
    await waitFor(() => !result.current.isFetching);
    expect(result.current.data?.data).toEqual(responseData);
  });
});
