import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '~/services/queryClient';
import PaperProvider from './PaperProvider';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>{children}</PaperProvider>
    </QueryClientProvider>
  );
}

export default AppProvider;
