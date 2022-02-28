import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withTheme } from 'react-native-paper';
import Home from '~/screens/Home';
import Withdraw from '~/screens/Withdraw';
import { MainStack } from '~/types';

const Stack = createNativeStackNavigator<MainStack>();

const StackScreen = withTheme(({ theme }) => {
  const { t } = useTranslation();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
  const combinedTheme: Theme = {
    ...navigationTheme,
    ...theme,
    colors: {
      ...navigationTheme.colors,
      ...theme.colors,
    },
  };
  return (
    <NavigationContainer theme={combinedTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: t('headerTitle.home', { ns: 'navigate' }) }}
        />
        <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          options={{
            headerTitle: t('headerTitle.withdraw', { ns: 'navigate' }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default StackScreen;
