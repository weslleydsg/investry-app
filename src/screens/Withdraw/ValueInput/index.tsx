import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';
import { formatPrice } from '~/utils/NumberFormatter';

interface Props {
  onBlur(value: number): void;
}

function ValueInput({ onBlur }: Props) {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  return (
    <TextInput
      dense
      returnKeyType="done"
      keyboardType="numeric"
      label={t('textInput.withdrawPlaceholder')}
      value={formatPrice(value)}
      onChangeText={(text) => setValue(Number(text))}
      onBlur={() => onBlur(value)}
    />
  );
}

export default memo(ValueInput);
