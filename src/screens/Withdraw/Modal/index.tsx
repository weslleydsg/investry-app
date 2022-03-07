import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import {
  Button,
  Headline,
  Modal as PaperModal,
  Portal,
  Text,
  useTheme,
} from 'react-native-paper';
import { Stock } from '~/types';
import { formatCurrency } from '~/utils/NumberFormatter';
import styles from './styles';

interface RequiredProps {
  visible: boolean;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonPress(): void;
}

type Props = RequiredProps &
  (
    | {
        availableBalance?: never;
        errors?: never;
      }
    | {
        availableBalance: number;
        errors: Stock[];
      }
  );

function Modal({
  visible,
  title,
  subtitle,
  buttonText,
  availableBalance,
  errors = [],
  onButtonPress,
}: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Portal>
      <PaperModal
        contentContainerStyle={{
          backgroundColor: theme.colors.surface,
          margin: theme.spacings.large,
        }}
        visible={visible}
        dismissable={false}
      >
        <View style={{ padding: theme.spacings.huge }}>
          <Headline
            style={[
              styles.title,
              {
                marginBottom: theme.spacings.medium,
              },
            ]}
          >
            {title}
          </Headline>
          <Text style={{ marginBottom: theme.spacings.huge }}>{subtitle}</Text>
          {!!availableBalance &&
            errors.map(({ nome, percentual }) => {
              const value = (availableBalance * percentual) / 100;
              return (
                <Text key={nome}>
                  {t('modal.withdrawMaxValueError', {
                    stock: nome,
                    value: formatCurrency(value),
                  })}
                </Text>
              );
            })}
        </View>
        <Button
          testID="Modal.button"
          style={[styles.button, { marginTop: theme.spacings.huge }]}
          mode="contained"
          onPress={onButtonPress}
        >
          {buttonText}
        </Button>
      </PaperModal>
    </Portal>
  );
}

export default memo(Modal);
