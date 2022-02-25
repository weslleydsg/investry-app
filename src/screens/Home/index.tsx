import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import useIsDarkMode from '~/hooks/useIsDarkMode';
import '~/services/i18n';

function HomeScreen() {
  const { t } = useTranslation();
  const isDarkMode = useIsDarkMode();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[{ color: isDarkMode ? 'white' : 'black' }]}>
        {t('screen.hello')}
      </Text>
    </View>
  );
}

export default HomeScreen;
