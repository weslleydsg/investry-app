import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { Button, Title, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStack, Stock } from '~/types';
import { formatCurrency } from '~/utils/NumberFormatter';
import FieldsBlock from './FieldsBlock';
import Modal from './Modal';
import styles from './styles';

type WithdrawValues = {
  [id: string]: number;
};

const WithdrawScreen = withTheme(({ theme }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NavigationProp<MainStack>>();
  const { params } = useRoute<RouteProp<MainStack, 'Withdraw'>>();
  const [withdrawValues, setWithdrawValues] = useState<WithdrawValues>({});
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorsModalStocks, setErrorsModalStocks] = useState<Stock[]>([]);

  const isButtonDisabled = useMemo<boolean>(() => {
    const values = Object.values(withdrawValues);
    if (values.length === 0) return true;
    return values.findIndex((withdrawValue) => withdrawValue > 0) === -1;
  }, [withdrawValues]);

  const totalWithdraw = useMemo<number>(() => {
    const values = Object.values(withdrawValues);
    return values.reduce((previousValue, value) => previousValue + value, 0);
  }, [withdrawValues]);

  const onWithdraw = () => {
    const keys = Object.entries(withdrawValues);
    const stocksError = params.holdingsData.acoes.filter((stock) => {
      const entry = keys.find(([id]) => stock.id === id);
      if (!entry) return false;
      const [, withdrawValue] = entry;
      const maxValue =
        (params.holdingsData.saldoTotal * stock.percentual) / 100;
      return withdrawValue > maxValue;
    });
    if (stocksError.length === 0) {
      setSuccessModalVisible(true);
    } else {
      setErrorsModalStocks(stocksError);
    }
  };

  const onNewWithdrawPress = useCallback(() => {
    navigate('Home');
  }, [navigate]);

  const onWithdrawFixPress = useCallback(() => {
    setErrorsModalStocks([]);
  }, []);

  const onUpdateWithdrawValues = useCallback((id: string, value: number) => {
    setWithdrawValues((previousValue) => ({ ...previousValue, [id]: value }));
  }, []);

  const keyExtractor = ({ id }: Stock) => id;

  const ListHeaderComponent = (
    <>
      <Title
        style={{
          marginLeft: theme.spacings.large,
          marginBottom: theme.spacings.large,
        }}
      >
        {t('aboutWallet').toUpperCase()}
      </Title>
      <FieldsBlock
        firstFieldLabel={t('name', { ns: 'glossary' })}
        firstFieldValue={params.holdingsData.nome}
        secondFieldLabel={t('availableBalance')}
        secondFieldValue={formatCurrency(params.holdingsData.saldoTotal)}
      />
      <Title
        style={{
          marginBottom: theme.spacings.large,
          marginLeft: theme.spacings.large,
        }}
      >
        {t('withdrawTitle').toUpperCase()}
      </Title>
    </>
  );

  const ListFooterComponent = (
    <View style={{ marginTop: theme.spacings.large }}>
      <FieldsBlock
        firstFieldLabel={t('totalWithdraw')}
        firstFieldValue={formatCurrency(totalWithdraw)}
      />
    </View>
  );

  const renderItem = ({ item }: { item: Stock }) => {
    const value = (params.holdingsData.saldoTotal * item.percentual) / 100;
    return (
      <FieldsBlock
        firstFieldLabel={t('stock', { ns: 'glossary' })}
        firstFieldValue={item.nome}
        secondFieldLabel={t('currentValue')}
        secondFieldValue={formatCurrency(value)}
        id={item.id}
        maxValue={value}
        onUpdateValue={onUpdateWithdrawValues}
      />
    );
  };

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={['right', 'bottom', 'left']}
    >
      <FlatList
        contentContainerStyle={{
          paddingVertical: theme.spacings.large,
        }}
        data={params.holdingsData.acoes}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Modal
        visible={successModalVisible}
        title={t('modal.withdrawSuccessTitle')}
        subtitle={t('modal.withdrawSuccessSubtitle')}
        buttonText={t('button.newWithdraw')}
        onButtonPress={onNewWithdrawPress}
      />
      <Modal
        visible={errorsModalStocks.length > 0}
        title={t('modal.withdrawErrorTitle')}
        subtitle={t('modal.withdrawErrorSubtitle')}
        buttonText={t('button.fixWithdraw')}
        availableBalance={params.holdingsData.saldoTotal}
        errors={errorsModalStocks}
        onButtonPress={onWithdrawFixPress}
      />
      <Button mode="contained" onPress={onWithdraw} disabled={isButtonDisabled}>
        {t('button.withdraw')}
      </Button>
    </SafeAreaView>
  );
});

export default WithdrawScreen;
