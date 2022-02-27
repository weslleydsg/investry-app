import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { Button, Title, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStack, Stock } from '~/types';
import { formatCurrency } from '~/utils/NumberFormatter';
import FieldsBlock from './FieldsBlock';
import styles from './styles';

type WithdrawValues = {
  [id: string]: number;
};

const WithdrawScreen = withTheme(({ theme }) => {
  const { t } = useTranslation();
  const { params } = useRoute<RouteProp<MainStack, 'Withdraw'>>();
  const [withdrawValues, setWithdrawValues] = useState<WithdrawValues>({});

  const totalWithdraw = useMemo<number>(() => {
    const values = Object.values(withdrawValues);
    return values.reduce((previousValue, value) => previousValue + value, 0);
  }, [withdrawValues]);

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
      <Button mode="contained">{t('button.withdraw')}</Button>
    </SafeAreaView>
  );
});

export default WithdrawScreen;
