/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from '../App';
import { initialState } from '../src/account/transaction.reducer';
const mockStore = configureStore([thunk]);

describe('App', () => {
  let store;
  let component: any;

  beforeEach(() => {

    store = mockStore({
      transaction: initialState
    });

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('renders correctly', () => {
    component;
  });

});
