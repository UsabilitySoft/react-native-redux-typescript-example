import { combineReducers } from 'redux';
import transaction from '../account/transaction.reducer';
// import balance from '../account/balance.reducer';

export enum EReduxActionTypes {
  TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST',
  TRANSACTIONS_REQUEST_SUCCESS = 'TRANSACTIONS_REQUEST_SUCCESS',
  // TRANSACTION_ADD_REQUEST = 'TRANSACTION_ADD_REQUEST',
  TRANSACTION_ADD_REQUEST_SUCCESS = 'TRANSACTION_ADD_REQUEST_SUCCESS',
  // BALANCE_UPDATE = 'BALANCE_UPDATE',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

const rootReducer = combineReducers({
  // balance,
  transaction
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;