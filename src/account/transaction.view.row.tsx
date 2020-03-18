// components/Hello.tsx
import React from 'react';
import {Text, View} from 'react-native';
import { ITransaction } from './transaction.reducer';
import { transaction as styles } from '../theme/bo';

export interface Props {
  transaction: ITransaction;
}

const TransactionRow: React.FC<Props> = (props) => {
  return (
    <View style={styles.rowB}>  
        <View style={styles.column}>
          <Text style={styles.counterparty}>{props.transaction.counterparty}</Text>
          <Text style={styles.category}>{props.transaction.category}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.amount}>{props.transaction.amount}</Text> 
          <Text style={styles.currency}>{props.transaction.currency}</Text>
        </View>
    </View>
  );
}

export default TransactionRow