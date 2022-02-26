import { DarkTheme } from 'react-native-paper';
import { spacings } from '~/styles/spacings';

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#f9e126',
    accent: '#015aa5',
  },
  spacings,
};
