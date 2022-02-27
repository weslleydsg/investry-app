import { HoldingsData } from '../api';

export type MainStack = {
  Home: undefined;
  Withdraw: {
    holdingsData: HoldingsData;
  };
};
