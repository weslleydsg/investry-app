export interface Stock {
  id: string;
  nome: string;
  percentual: number;
}

export interface HoldingsData {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: Stock[];
}

export interface Wallets {
  response: {
    status: string;
    data: {
      listaInvestimentos: HoldingsData[];
    };
  };
}
