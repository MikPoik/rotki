import { DefiState } from '@/store/defi/types';
import { Zero } from '@/utils/bignumbers';

export const defaultState = (): DefiState => ({
  dsrHistory: {},
  dsrBalances: {
    currentDSR: Zero,
    balances: {}
  },
  makerDAOVaults: [],
  makerDAOVaultDetails: [],
  aaveBalances: {},
  aaveHistory: {},
  allProtocols: {},
  compoundBalances: {},
  compoundHistory: {
    events: [],
    debtLoss: {},
    interestProfit: {},
    rewards: {}
  }
});

export const state: DefiState = defaultState();
