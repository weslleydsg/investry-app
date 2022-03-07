import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelperText, TextInput } from 'react-native-paper';
import { formatCurrency } from '~/utils/NumberFormatter';
import { maskCurrency } from '~/utils/TextMasks';

interface Props {
  maxValue: number;
  onChangeText(value: number): void;
}

function ValueInput({ maxValue, onChangeText }: Props) {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [isError, setIsError] = useState(false);
  const currencyValue = value ? formatCurrency(value) : '';

  const validateAndChangeText = (text: string) => {
    const newValue = Number(maskCurrency(text));
    setIsError(newValue > maxValue);
    onChangeText(newValue);
    setValue(Number(maskCurrency(text)));
  };

  return (
    <>
      <TextInput
        testID="ValueInput.TextInput"
        dense
        returnKeyType="done"
        keyboardType="numeric"
        label={t('textInput.withdrawPlaceholder')}
        value={currencyValue}
        onChangeText={validateAndChangeText}
      />
      {isError && (
        <HelperText type="error" visible>
          {t('textInput.withdrawError', { value: formatCurrency(maxValue) })}
        </HelperText>
      )}
    </>
  );
}

export default memo(ValueInput);
