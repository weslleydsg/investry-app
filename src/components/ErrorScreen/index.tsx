import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Headline, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  networkError: boolean;
  onRetryPress(): void;
}

function ErrorScreen({ networkError, onRetryPress }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.screen, { padding: theme.spacings.large }]}
      edges={['right', 'bottom', 'left']}
    >
      <Headline style={styles.title}>
        {t(networkError ? 'error.network' : 'error.unexpected')}
      </Headline>
      <Button
        style={{ marginTop: theme.spacings.huge }}
        mode="contained"
        onPress={onRetryPress}
      >
        {t('button.retry', { ns: 'common' })}
      </Button>
    </SafeAreaView>
  );
}

export default memo(ErrorScreen);
