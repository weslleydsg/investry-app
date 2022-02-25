import React, { Suspense } from 'react';
import { ActivityIndicator, Platform, StatusBar, View } from 'react-native';
import useIsDarkMode from '~/hooks/useIsDarkMode';
import HomeScreen from '~/screens/Home';
import '~/services/i18n';

function App() {
  const isDarkMode = useIsDarkMode();
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android' && Platform.Version >= 23) {
    StatusBar.setBackgroundColor(isDarkMode ? 'gray' : 'white');
  }
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
      <HomeScreen />
    </Suspense>
  );
}

export default App;
