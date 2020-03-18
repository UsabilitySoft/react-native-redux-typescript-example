
import { EReduxActionTypes, IReduxBaseAction } from '../redux/root.reducer';
import { IReduxBalanceState } from './balance.reducer';

export interface IReduxBalanceSetAction extends IReduxBaseAction {
  type: EReduxActionTypes.BALANCE_SET;
  data: IReduxBalanceState;
}

export function setBalance(balance: IReduxBalanceState): IReduxBalanceSetAction {
  return {
    type: EReduxActionTypes.BALANCE_SET,
    data: balance
  };
}