import React from 'react';
import { useTranslation } from 'react-i18next';
import { Headline, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const HomeScreen = withTheme(({ theme }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView
      style={[styles.screen, { margin: theme.spacings.large }]}
      edges={['right', 'bottom', 'left']}
    >
      <Headline>{t('hello')}</Headline>
    </SafeAreaView>
  );
});

export default HomeScreen;
