import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { withTheme } from 'react-native-paper';
import Routes from '~/routes';

const App = withTheme(({ theme }) => {
  StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android' && Platform.Version >= 23) {
    StatusBar.setBackgroundColor(theme.colors.background);
  }
  return <Routes />;
});

export default App;
