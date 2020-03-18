import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EReduxActionTypes, IReduxBaseAction } from '../redux/root.reducer';
import { ITransaction, IReduxTransactionState } from './transaction.reducer';
import { Endpoints } from '../constants/api.endpoints'

export interface IReduxTransactionsRequestAction extends IReduxBaseAction {
  type: EReduxActionTypes.TRANSACTIONS_REQUEST;
  data: IReduxTransactionState;
}

export interface IReduxTransactionsRequestSuccessAction extends IReduxBaseAction {
  type: EReduxActionTypes.TRANSACTIONS_REQUEST_SUCCESS;
  data: ITransaction[];
}
export interface IReduxTransactionAddRequestSuccessAction extends IReduxBaseAction {
  type: EReduxActionTypes.TRANSACTION_ADD_REQUEST_SUCCESS;
  data: ITransaction;
}

export function getTransactions(): ThunkAction<
  Promise<IReduxTransactionsRequestSuccessAction>,
  IReduxTransactionState,
  undefined,
  IReduxTransactionsRequestSuccessAction
> {
  return async (dispatch: ThunkDispatch<IReduxTransactionState, undefined, IReduxTransactionsRequestSuccessAction>) => {
    const res = await fetch(Endpoints.TRANSACTIONS);
    const transactions = await res.json();

    return dispatch({
      type: EReduxActionTypes.TRANSACTIONS_REQUEST_SUCCESS,
      data: transactions.data
    });
  };
}