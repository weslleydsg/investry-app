export interface HoldingsData {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: {
    id: string;
    nome: string;
    percentual: number;
  }[];
}

export interface Holdings {
  response: {
    status: string;
    data: {
      listaInvestimentos: HoldingsData[];
    };
  };
}
