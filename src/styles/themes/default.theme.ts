import { DefaultTheme } from 'react-native-paper';
import { spacings } from '~/styles/spacings';

export const defaultTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#d9c428',
    accent: '#015aa5',
  },
  spacings,
};
