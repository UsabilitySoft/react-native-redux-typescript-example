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
    <View style={styles.row}>
      <View style={styles.column}>
        <View style={styles.column}>
          <Text>{props.transaction.amount} {props.transaction.currency}</Text>
        </View>
        <View style={styles.column}>
          <Text>{props.transaction.counterparty}{props.transaction.category}</Text>
        </View>
      </View>
    </View>
  );
}

export default TransactionRow