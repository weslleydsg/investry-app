import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { ActivityIndicator, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetWallets } from '~/services/api/wallets';
import { HoldingsData, MainStack } from '~/types';
import styles from './styles';
import WalletItem from './WalletItem';

const HomeScreen = withTheme(({ theme }) => {
  const { navigate } = useNavigation<NavigationProp<MainStack>>();
  const { isFetching, data } = GetWallets();
  const wallets = data?.data?.response.data.listaInvestimentos;

  const goToWithdraw = useCallback(
    (holdingsData: HoldingsData) => {
      navigate('Withdraw', { holdingsData });
    },
    [navigate],
  );

  const keyExtractor = (_: HoldingsData, index: number) => `${index}`;

  const renderItem = ({ item }: { item: HoldingsData }) => {
    const disabled = item.indicadorCarencia === 'S';
    return (
      <WalletItem item={item} disabled={disabled} onPress={goToWithdraw} />
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
    <SafeAreaView
      style={styles.safeAreaView}
      edges={['right', 'bottom', 'left']}
    >
      <FlatList
        data={wallets}
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
