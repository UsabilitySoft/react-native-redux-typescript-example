/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {initStore} from './src/redux/store';
import {Provider} from 'react-redux';
import App from './App';

const store = initStore();

class RootComponent extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => RootComponent);
