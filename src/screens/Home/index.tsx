import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ErrorScreen from '~/components/ErrorScreen';
import LoadingScreen from '~/components/LoadingScreen';
import { GetWallets } from '~/services/api/wallets';
import { HoldingsData, MainStack } from '~/types';
import { ErrorMessages } from '~/utils/Constants';
import styles from './styles';
import WalletItem from './WalletItem';

const HomeScreen = withTheme(({ theme }) => {
  const { navigate } = useNavigation<NavigationProp<MainStack>>();
  const { isFetching, data, error, refetch } = GetWallets();
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
    return <LoadingScreen />;
  }
  if (error) {
    return (
      <ErrorScreen
        networkError={error.message === ErrorMessages.network}
        onRetryPress={refetch}
      />
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
