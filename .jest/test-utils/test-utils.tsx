import { NavigationContainer } from '@react-navigation/native';
import {
  render,
  RenderAPI,
  RenderOptions
} from '@testing-library/react-native';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import PaperProvider from '~/providers/PaperProvider';
import { queryClient } from '~/services/queryClient';

interface Props {
  children: React.ReactElement;
}

function AllTheProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider>{children}</PaperProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderAPI => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };

