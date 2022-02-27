import React, { memo, useCallback } from 'react';
import { Divider, Surface, useTheme } from 'react-native-paper';
import ValueInput from '../ValueInput';
import Field from './Field';

interface Props {
  firstFieldLabel: string;
  firstFieldValue: string;
  secondFieldLabel?: string;
  secondFieldValue?: string;
  id?: string;
  onUpdateValue?(id: string, value: number): void;
}

function FieldsBlock({
  firstFieldLabel,
  firstFieldValue,
  secondFieldLabel,
  secondFieldValue,
  id,
  onUpdateValue,
}: Props) {
  const theme = useTheme();

  const onBlur = useCallback(
    (value: number) => {
      if (!id || !onUpdateValue) return;
      onUpdateValue(id, value);
    },
    [id, onUpdateValue],
  );

  return (
    <Surface
      style={{
        marginBottom: theme.spacings.large,
        padding: theme.spacings.large,
      }}
    >
      <Field label={firstFieldLabel} value={firstFieldValue} />
      {!!secondFieldLabel && !!secondFieldValue && (
        <>
          <Divider style={{ marginVertical: theme.spacings.medium }} />
          <Field label={secondFieldLabel} value={secondFieldValue} />
        </>
      )}
      {!!id && onUpdateValue && (
        <>
          <Divider style={{ marginVertical: theme.spacings.medium }} />
          <ValueInput onBlur={onBlur} />
        </>
      )}
    </Surface>
  );
}

export default memo(FieldsBlock);
