// components/Hello.tsx
import React, { PureComponent } from 'react';
import {Button, StyleSheet, Image, Text, View, TouchableOpacity, Alert} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../redux/root.reducer';
import { setBalance } from './balance.actions';
import { getTransactions } from './transaction.actions';
import { ITransaction } from './transaction.reducer';
import TransactionRow from './transaction.view.row';


import { transaction as styles } from '../theme/bo'
import { Language } from '../helpers/language';

class TransactionViewList extends PureComponent<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {}> {
  
  public componentDidMount() {
    const { getTransactions, isLoaded, transactionsLoadedAt } = this.props;
    const fiveMinutes = 5 * 60 * 1000;
    if (!isLoaded || !transactionsLoadedAt || Date.now() - transactionsLoadedAt > fiveMinutes) {
      getTransactions();
    }
  }

  public render() {
    const { transactions, isLoaded, transactionsLoadedAt } = this.props;
    //const balance = transactions.map()
    const balance = transactions.reduce((total, obj) => obj.amount-0 +total,0)
    
    if (!isLoaded) {
      return <Text>Loading...</Text>;
    }
    
    return(

      <View style={styles.container}>
        <Text style={styles.title}>{Language.COIN_NAME} {Language.BALANCE}</Text>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.symbol}> {Language.COIN_CURRENCY}</Text>
        </View>
        
          {/* NASTY LAST-MINUTE HACKS TO VISUALISE, NO TIME FOR BUTTONS, I HOPE YOU LIKE IT */}
          <TouchableOpacity
            onPress={() => Alert.alert('You have found a hack!','\nSorry you cannot add funds, or categorise anything. Spent too much time on \"Provide a starting-point technical foundation upon which the full-scale app could potentially develop.\" because I wanted to try and use Redux with TypeScript(for the first time) so please have a look at that 😬')}>
            <Image style={styles.dummyButtons} resizeMode="stretch" source={require('../theme/assets/dummy-buttons.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => Alert.alert(`${Language.COIN_NAME} is currently at it's all-time high! You are officially loaded.`)}>
            <Image style={styles.dummyGraph} resizeMode="stretch" source={require('../theme/assets/dummy-graph.png')}></Image>
          </TouchableOpacity>

          {/* <Text style={styles.balance}>{moment(transactionsLoadedAt).format("YYYY-MM-DD hh:mm:ss")transactionsLoadedAt}</Text> */}
          <Text style={styles.date}>Wednesday 6 September</Text>

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
    { getTransactions, /* setBalance */ },
      dispatch
  );
    
export default connect(mapStateToProps,mapDispatchToProps)(TransactionViewList);
      
