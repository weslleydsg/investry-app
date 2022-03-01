import { AppLanguageNamespace } from '~/types';

const namespace: AppLanguageNamespace = {
  aboutWallet: 'About your wallet',
  withdrawTitle: 'Withdraw your own way',
  availableBalance: 'Available balance',
  currentValue: 'Value',
  totalWithdraw: 'Withdraw value',
  button: {
    withdraw: 'Withdraw',
    newWithdraw: 'New withdraw',
    fixWithdraw: 'Fix',
  },
  textInput: {
    withdrawPlaceholder: 'Withdraw value',
    withdrawError: 'Value can not be greater than {{value}}',
  },
  modal: {
    withdrawSuccessTitle: 'Success withdraw!',
    withdrawErrorTitle: 'Invalid data',
    withdrawSuccessSubtitle:
      'Withdrawn value will be available in your account in 5 business days',
    withdrawErrorSubtitle:
      'One or more fields have value greater than allowed:',
    withdrawMaxValueError: '{{stock}}: maximum value is {{value}}.',
  },
  error: {
    unexpected: 'Unexpected error. Please, try again later',
    network: 'You need to be connected to internet',
  },
};

export default namespace;
