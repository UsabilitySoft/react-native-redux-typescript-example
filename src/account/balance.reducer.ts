import { EReduxActionTypes } from '../redux/root.reducer';
import { IReduxBalanceSetAction } from './balance.actions';

export interface IReduxBalanceState {
  amount?: number;
}

export const initialState: IReduxBalanceState = {
  amount: undefined,
};

type TBalanceReducerActions = IReduxBalanceSetAction;

export default function(state: IReduxBalanceState = initialState, action: TBalanceReducerActions) {
  switch (action.type) {
    case EReduxActionTypes.BALANCE_SET:
      return { ...state, amount: action.data };
    
    default:
      return state;
  }
}