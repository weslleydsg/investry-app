import React from 'react';
import { fireEvent, render } from 'test-utils';
import { useTranslationMock } from '~/__mocks__/react-i18next.mock';
import { mockedUseRoute } from '~/__mocks__/react-navigation.mock';
import Home from '.';

const wallet = {
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
};
mockedUseRoute.mockReturnValue({ params: { holdingsData: wallet } });

describe('WithdrawScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Home />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(useTranslationMock.self).toHaveBeenCalledWith();
    expect(useTranslationMock.t).toHaveBeenCalledWith('aboutWallet');
    expect(useTranslationMock.t).toHaveBeenCalledWith('name', {
      ns: 'glossary',
    });
    expect(useTranslationMock.t).toHaveBeenCalledWith('availableBalance');
    expect(useTranslationMock.t).toHaveBeenCalledWith('withdrawTitle');
    expect(useTranslationMock.t).toHaveBeenCalledWith('stock', {
      ns: 'glossary',
    });
    expect(useTranslationMock.t).toHaveBeenCalledWith(
      'textInput.withdrawPlaceholder',
    );
    expect(useTranslationMock.t).toHaveBeenCalledWith('currentValue');
    expect(useTranslationMock.t).toHaveBeenCalledWith('totalWithdraw');
  });

  it('shows text input error', () => {
    const { getAllByTestId, queryByText } = render(<Home />);
    const [textInput] = getAllByTestId('ValueInput.TextInput');
    fireEvent.changeText(textInput, '26000,00');
    expect(queryByText('textInput.withdrawError')).not.toBeNull();
  });

  it('shows error modal', () => {
    const { getByText, getAllByTestId } = render(<Home />);
    const [textInput] = getAllByTestId('ValueInput.TextInput');
    fireEvent.changeText(textInput, '26000,00');
    const withdrawButton = getByText('button.withdraw');
    fireEvent.press(withdrawButton);
    expect(useTranslationMock.t).toHaveBeenCalledWith(
      'modal.withdrawErrorTitle',
    );
  });
});
