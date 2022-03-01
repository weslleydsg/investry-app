import React, { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AppProvider from '~/providers/AppProvider';
import '~/services/i18n';
import App from './App';

function InitiateApp() {
  return (
    <Suspense
      fallback={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator />
        </View>
      }
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Suspense>
  );
}

export default InitiateApp;
