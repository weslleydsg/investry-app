import React, { Suspense } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AppProvider from '~/providers/AppProvider';
import '~/services/i18n';
import App from './App';

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function AppLoading() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator />
    </View>
  );
}

function InitiateApp() {
  return (
    <Suspense fallback={<AppLoading />}>
      <AppProvider>
        <App />
      </AppProvider>
    </Suspense>
  );
}

export default InitiateApp;
