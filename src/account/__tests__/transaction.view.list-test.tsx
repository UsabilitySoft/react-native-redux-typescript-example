import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import TransactionViewList from '../transaction.view.list';
// import { initialState } from '../transaction.reducer';
const mockStore = configureStore([thunk]);

describe('Transaction List', () => {
  let store;
  let component: any;

  beforeEach(() => {
    // store = mockStore({
    //   transaction: initialState
    // });

    store = mockStore({
      transaction: {
        transactions: [
          {
            id: 1,
            currency: 'Bø',
            amount: '20.00',
            counterparty: 'Bó',
            category: 'Gifts'
          }
        ],
        transactionsLoaded: true,
        transactionsLoadedAt: 1584506435876
      }
    })

    component = renderer.create(
      <Provider store={store}>
        <TransactionViewList />
      </Provider>
    );
  });

  it('Should render with transactions state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // We would need to simulate events, we can also test actions and reducers, skipping TDD due to time limitation
  // it('should dispatch an action on button click', () => {
  // });
});