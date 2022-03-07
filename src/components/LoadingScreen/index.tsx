import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';

function LoadingScreen() {
  return (
    <View testID="LoadingScreen.Screen" style={styles.screen}>
      <ActivityIndicator />
    </View>
  );
}

export default LoadingScreen;
