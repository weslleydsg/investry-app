import React, { memo } from 'react';
import { View } from 'react-native';
import { Subheading } from 'react-native-paper';
import styles from './styles';

interface Props {
  label: string;
  value: string;
}

function FieldsBlock({ label, value }: Props) {
  return (
    <View style={styles.row}>
      <Subheading>{label}</Subheading>
      <Subheading>{value}</Subheading>
    </View>
  );
}

export default memo(FieldsBlock);
