import React from 'react';
import { fireEvent, render } from 'test-utils';
import { GetWallets } from '~/services/api/wallets';
import { QueryResult, Wallets } from '~/types';
import { ErrorMessages } from '~/utils/Constants';
import { useTranslationMock } from '~/__mocks__/react-i18next.mock';
import { useNavigationMock } from '~/__mocks__/react-navigation.mock';
import Home from '.';
import WalletItem from './WalletItem';

jest.mock('~/services/api/wallets');

const GetWalletsResult: QueryResult<Wallets> = {
  isLoading: false,
  data: {
    data: {
      response: {
        status: '200',
        data: {
          listaInvestimentos: [
            {
              nome: 'INVESTIMENTO I',
              objetivo: 'Minha aposentadoria',
              saldoTotal: 39321.29,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'Banco do Brasil (BBAS3)',
                  percentual: 28.1,
                },
                {
                  id: '2',
                  nome: 'Vale (VALE3)',
                  percentual: 20.71,
                },
                {
                  id: '3',
                  nome: 'Petrobras (PETR4)',
                  percentual: 21.63,
                },
                {
                  id: '4',
                  nome: 'Cemig (CMIG3)',
                  percentual: 12.41,
                },
                {
                  id: '5',
                  nome: 'Oi (OIBR3)',
                  percentual: 17.15,
                },
              ],
            },
            {
              nome: 'INVESTIMENTO II',
              objetivo: 'Viajem dos sonhos',
              saldoTotal: 7300,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'Banco do Brasil (BBAS3)',
                  percentual: 35.81,
                },
                {
                  id: '2',
                  nome: 'Vale (VALE3)',
                  percentual: 26.42,
                },
                {
                  id: '3',
                  nome: 'Petrobras (PETR4)',
                  percentual: 37.77,
                },
              ],
            },
            {
              nome: 'INVESTIMENTO III',
              objetivo: 'Abrir meu próprio negócio',
              saldoTotal: 26000,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'Banco do Brasil (BBAS3)',
                  percentual: 41.1,
                },
                {
                  id: '2',
                  nome: 'Vale (VALE3)',
                  percentual: 22.43,
                },
                {
                  id: '3',
                  nome: 'Petrobras (PETR4)',
                  percentual: 26.12,
                },
                {
                  id: '5',
                  nome: 'OI (OIBR3)',
                  percentual: 10.35,
                },
              ],
            },
            {
              nome: 'INVESTIMENTO IV',
              objetivo: 'Investimento em carencia',
              saldoTotal: 44000,
              indicadorCarencia: 'S',
              acoes: [
                {
                  id: '1',
                  nome: 'Banco do Brasil (BBAS3)',
                  percentual: 41.1,
                },
                {
                  id: '2',
                  nome: 'Vale (VALE3)',
                  percentual: 22.43,
                },
                {
                  id: '3',
                  nome: 'Petrobras (PETR4)',
                  percentual: 26.12,
                },
                {
                  id: '5',
                  nome: 'OI (OIBR3)',
                  percentual: 10.35,
                },
              ],
            },
          ],
        },
      },
    },
  } as QueryResult<Wallets>['data'],
  error: null,
  refetch: jest.fn(),
};
const GetWalletsMock = GetWallets as jest.Mock;
GetWalletsMock.mockReturnValue(GetWalletsResult);

describe('HomeScreen', () => {
  it('navigates to Withdraw screen', () => {
    GetWalletsMock.mockReturnValue(GetWalletsResult);
    const { toJSON, getByText } = render(<Home />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    const wallet =
      GetWalletsResult.data?.data?.response.data.listaInvestimentos[0];
    if (!wallet) throw new Error('Wallet data not present');
    const walletName = getByText(wallet.nome);
    fireEvent.press(walletName);
    expect(useNavigationMock.navigate).toHaveBeenCalledWith('Withdraw', {
      holdingsData: wallet,
    });
  });

  it('shows loading screen', () => {
    GetWalletsMock.mockReturnValue({
      ...GetWalletsResult,
      isFetching: true,
    });
    const { toJSON, queryByTestId } = render(<Home />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    const loadingScreen = queryByTestId('LoadingScreen.Screen');
    expect(loadingScreen).not.toBeNull();
  });

  it('shows network error screen', () => {
    GetWalletsMock.mockReturnValue({
      ...GetWalletsResult,
      error: new Error(ErrorMessages.network),
    });
    const { toJSON } = render(<Home />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(useTranslationMock.self).toHaveBeenCalledWith();
    expect(useTranslationMock.t).toHaveBeenCalledWith('error.network');
    expect(useTranslationMock.t).toHaveBeenCalledWith('button.retry', {
      ns: 'common',
    });
  });

  it('shows unexpected error screen', () => {
    GetWalletsMock.mockReturnValue({
      ...GetWalletsResult,
      error: new Error(),
    });
    const { toJSON } = render(<Home />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(useTranslationMock.self).toHaveBeenCalledWith();
    expect(useTranslationMock.t).toHaveBeenCalledWith('error.unexpected');
    expect(useTranslationMock.t).toHaveBeenCalledWith('button.retry', {
      ns: 'common',
    });
  });
});

describe('WalletItem', () => {
  it('renders card', () => {
    const wallet =
      GetWalletsResult.data?.data?.response.data.listaInvestimentos[1];
    if (!wallet) throw new Error('Wallet data not present');
    const { queryByText } = render(
      <WalletItem item={wallet} disabled={false} onPress={jest.fn()} />,
    );
    expect(queryByText(wallet.nome)).not.toBeNull();
    expect(queryByText(wallet.objetivo)).not.toBeNull();
    expect(queryByText('R$ 7.300,00')).not.toBeNull();
  });
});
