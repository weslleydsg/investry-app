export interface AppLanguageNamespace {
  aboutWallet: string;
  withdrawTitle: string;
  availableBalance: string;
  currentValue: string;
  totalWithdraw: string;
  button: {
    withdraw: string;
    newWithdraw: string;
    fixWithdraw: string;
  };
  textInput: {
    withdrawPlaceholder: string;
    withdrawError: string;
  };
  modal: {
    withdrawSuccessTitle: string;
    withdrawErrorTitle: string;
    withdrawSuccessSubtitle: string;
    withdrawErrorSubtitle: string;
    withdrawMaxValueError: string;
  };
}

export interface NavigateLanguageNamespace {
  headerTitle: {
    home: string;
    withdraw: string;
  };
}

export interface GlossaryLanguageNamespace {
  name: string;
  stock: string;
}

export type LanguageRecourse = {
  app: AppLanguageNamespace;
  navigate: NavigateLanguageNamespace;
  glossary: GlossaryLanguageNamespace;
};

type Resources<T = LanguageRecourse> = {
  en: T;
  pt: T;
};

export type LanguageResources = Resources;
