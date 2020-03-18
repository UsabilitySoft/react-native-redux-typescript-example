// components/Hello.tsx
import React, { PureComponent } from 'react';
import {Text, View} from 'react-native';

import { connect } from 'react-redux';
import { AppState } from '../redux/root.reducer';
import { Language } from '../helpers/language';

class Balance extends PureComponent<ReturnType<typeof mapStateToProps>, {}> {
  public render() {
    const { amount } = this.props.balance;
    return (
      <View>
        <Text>{amount}</Text>
        <Text>{Language.COIN_CURRENCY}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  balance: state.balance
});
    
export default connect(mapStateToProps, null)(Balance);
      
