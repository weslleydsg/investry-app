import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '~/services/queryClient';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default AppProvider;
