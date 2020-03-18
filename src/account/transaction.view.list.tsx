// components/Hello.tsx
import React, { PureComponent } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../redux/root.reducer';
import { getTransactions } from './transaction.actions';
import { ITransaction } from './transaction.reducer';
import TransactionRow from './transaction.view.row';

class TransactionViewList extends PureComponent<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {}> {
  
  public componentDidMount() {
    const { getTransactions, isLoaded, transactionsLoadedAt } = this.props;
    const fiveMinutes = 5 * 60 * 1000;
    if (!isLoaded || !transactionsLoadedAt || Date.now() - transactionsLoadedAt > fiveMinutes) {
      getTransactions();
    }
  }

  public render() {
    const { transactions, isLoaded } = this.props;
    
    if (!isLoaded) {
      return <Text>Loading...</Text>;
    }
    
    return(
      <View>
        {transactions.map((transaction: ITransaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  transactions: state.transaction.transactions,
  isLoaded: state.transaction.transactionsLoaded,
  transactionsLoadedAt: state.transaction.transactionsLoadedAt
});
    
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    { getTransactions },
      dispatch
  );
    
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionViewList);
      
