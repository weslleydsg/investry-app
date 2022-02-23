import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { displayName } from '~/../app.json';
import useIsDarkMode from '~/hooks/useIsDarkMode';

function App() {
  const isDarkMode = useIsDarkMode();
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android' && Platform.Version >= 23) {
    StatusBar.setBackgroundColor(isDarkMode ? 'gray' : 'white');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[{ color: isDarkMode ? 'white' : 'black' }]}>
        {displayName}
      </Text>
    </View>
  );
}

export default App;
