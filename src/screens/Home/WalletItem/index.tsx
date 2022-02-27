import React, { memo } from 'react';
import { View } from 'react-native';
import { Caption, Card, Subheading, useTheme } from 'react-native-paper';
import { HoldingsData } from '~/types';
import { formatCurrency } from '~/utils/NumberFormatter';
import styles from './styles';

interface Props {
  item: HoldingsData;
  disabled: boolean;
  onPress(item: HoldingsData): void;
}

function WalletItem({ item, disabled, onPress }: Props) {
  const theme = useTheme();
  return (
    <Card
      style={{
        marginTop: theme.spacings.large,
        opacity: disabled ? theme.opacities.disabled : theme.opacities.enabled,
      }}
      onPress={disabled ? undefined : () => onPress(item)}
    >
      <Card.Content style={styles.content}>
        <View style={styles.infoView}>
          <Subheading style={styles.textBold} numberOfLines={2}>
            {item.nome}
          </Subheading>
          <Caption numberOfLines={2}>{item.objetivo}</Caption>
        </View>
        <View style={[styles.priceView, { marginLeft: theme.spacings.medium }]}>
          <Subheading style={styles.textBold}>
            {formatCurrency(item.saldoTotal)}
          </Subheading>
        </View>
      </Card.Content>
    </Card>
  );
}

export default memo(WalletItem);
