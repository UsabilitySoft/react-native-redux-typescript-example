import { EReduxActionTypes } from '../redux/root.reducer';
import { IReduxTransactionsRequestAction, IReduxTransactionsRequestSuccessAction, IReduxTransactionAddRequestSuccessAction } from './transaction.actions';

export interface ITransaction {
  id: number;
  currency: string;
  amount: number;
  counterparty: string;
  category: string;
}

export interface IReduxTransactionState {
  transactions: ITransaction[];
  transactionsLoaded: boolean;
  transactionsLoadedAt?: number;
  // transaction?: ITransaction;
  // transactionLoaded: boolean;
}

export const initialState: IReduxTransactionState = {
  transactions: [],
  transactionsLoaded: false,
  transactionsLoadedAt: undefined,
  // transaction: undefined,
  // transactionLoaded: false
};

type TTransactionReducerActions = 
  IReduxTransactionsRequestAction |     
  IReduxTransactionsRequestSuccessAction | 
  IReduxTransactionAddRequestSuccessAction;

export default function(state: IReduxTransactionState = initialState, action: TTransactionReducerActions) {
  switch (action.type) {
    case EReduxActionTypes.TRANSACTIONS_REQUEST:
      return { ...state, initialState };
    
    case EReduxActionTypes.TRANSACTIONS_REQUEST_SUCCESS:
      return { ...state, transactions: action.data, transactionsLoaded: true, transactionsLoadedAt: Date.now() };
    
    case EReduxActionTypes.TRANSACTION_ADD_REQUEST_SUCCESS:
      return { ...state, addedTransaction: action.data };
    
    default:
      return state;
  }
}