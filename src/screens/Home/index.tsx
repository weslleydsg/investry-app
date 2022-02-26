import React from 'react';
import { FlatList, View } from 'react-native';
import {
  ActivityIndicator,
  Caption,
  Card,
  Subheading,
  withTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetHoldings } from '~/services/api/holdings';
import { HoldingsData } from '~/types';
import { formatPrice } from '~/utils/NumberFormatter';
import styles from './styles';

const HomeScreen = withTheme(({ theme }) => {
  const { isFetching, data } = GetHoldings();
  const holdings = data?.data?.response.data.listaInvestimentos;

  const keyExtractor = (_: HoldingsData, index: number) => `${index}`;

  const renderItem = ({ item }: { item: HoldingsData }) => {
    return (
      <Card style={{ marginTop: theme.spacings.large }}>
        <Card.Content style={styles.holdingItem}>
          <View style={styles.holdingItemInfo}>
            <Subheading style={styles.holdingItemBold} numberOfLines={2}>
              {item.nome}
            </Subheading>
            <Caption numberOfLines={2}>{item.objetivo}</Caption>
          </View>
          <View
            style={[
              styles.holdingItemPrice,
              { marginLeft: theme.spacings.medium },
            ]}
          >
            <Subheading style={styles.holdingItemBold}>
              {formatPrice(item.saldoTotal)}
            </Subheading>
          </View>
        </Card.Content>
      </Card>
    );
  };

  if (isFetching) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <FlatList
        data={holdings}
        contentContainerStyle={{
          paddingHorizontal: theme.spacings.large,
          paddingBottom: theme.spacings.large,
        }}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
});

export default HomeScreen;
