import { DefaultTheme } from 'react-native-paper';
import { spacings } from '~/styles/spacings';

export const defaultTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#015aa5',
    accent: '#f9e126',
  },
  spacings,
};
