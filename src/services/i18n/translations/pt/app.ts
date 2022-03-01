import { AppLanguageNamespace } from '~/types';

const namespace: AppLanguageNamespace = {
  aboutWallet: 'Dados da carteira',
  withdrawTitle: 'Resgate do seu jeito',
  availableBalance: 'Saldo total disponível',
  currentValue: 'Saldo acumulado',
  totalWithdraw: 'Valor total a resgatar',
  button: {
    withdraw: 'Confirmar resgate',
    newWithdraw: 'Novo resgaste',
    fixWithdraw: 'Corrigir',
  },
  textInput: {
    withdrawPlaceholder: 'Valor a resgatar',
    withdrawError: 'Valor não pode ser maior que {{value}}',
  },
  modal: {
    withdrawSuccessTitle: 'Resgate Efetuado!',
    withdrawErrorTitle: 'Dados inválidos',
    withdrawSuccessSubtitle:
      'O valor solicitado estará em sua conta em até 5 dias úteis!',
    withdrawErrorSubtitle:
      'Você preencheu um ou mais campos com valor acima do permitido:',
    withdrawMaxValueError: '{{stock}}: valor máximo de {{value}}.',
  },
  error: {
    unexpected:
      'Algo inesperado aconteceu. Por favor, tente novamente mais tarde',
    network: 'Conecte-se a internet para continuar',
  },
};

export default namespace;
