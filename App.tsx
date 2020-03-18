/**
 * Bó Front End Programming Challenge
 *
 *  Generated with the TypeScript template following these instructions
 * https://github.com/UsabilitySoft/blank-running-React-Native-with-TypeScript-instructions
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { app as styles } from './src/theme/bo'
import TransactionViewList from './src/account/transaction.view.list';
import Balance from './src/account/balance';
import { Language } from './src/helpers/language';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{Language.COIN_NAME} {Language.BALANCE}</Text>
              <Balance />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Transactions</Text>
              <TransactionViewList />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// const mapStateToProps = (state: any) => ({
//   state
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   dispatch
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App