import { combineReducers } from 'redux';
import balance from '../account/balance.reducer';
import transaction from '../account/transaction.reducer';

export enum EReduxActionTypes {
  BALANCE_SET = 'BALANCE_SET',
  TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST',
  TRANSACTIONS_REQUEST_SUCCESS = 'TRANSACTIONS_REQUEST_SUCCESS',
  // TRANSACTION_ADD_REQUEST = 'TRANSACTION_ADD_REQUEST',
  TRANSACTION_ADD_REQUEST_SUCCESS = 'TRANSACTION_ADD_REQUEST_SUCCESS'
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

const rootReducer = combineReducers({
  balance,
  transaction
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;