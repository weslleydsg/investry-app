import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainRoutes from './main.routes';

function Routes() {
  return (
    <SafeAreaProvider style={{ position: 'relative' }}>
      <MainRoutes />
    </SafeAreaProvider>
  );
}

export default Routes;
