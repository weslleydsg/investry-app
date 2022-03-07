import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import useIsDarkMode from '~/hooks/useIsDarkMode';
import { darkTheme, defaultTheme } from '~/styles';

interface Props {
  children: React.ReactElement;
}

function Provider({ children }: Props) {
  const isDarkMode = useIsDarkMode();
  return (
    <PaperProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      {children}
    </PaperProvider>
  );
}

export default Provider;
