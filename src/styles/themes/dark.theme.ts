import { DarkTheme } from 'react-native-paper';
import { opacities } from '~/styles/opacities';
import { spacings } from '~/styles/spacings';

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#f9e126',
    accent: '#015aa5',
  },
  opacities,
  spacings,
};
