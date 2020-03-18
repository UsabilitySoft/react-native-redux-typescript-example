
import { StyleSheet } from 'react-native';

const colours = {
  white: 'white',
  black: 'black',
  grey: '#555'
}
export const app = StyleSheet.create({
  scrollView: {
    backgroundColor: colours.white,
    height: '100%'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: colours.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colours.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: colours.grey,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: colours.grey,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export const transaction = StyleSheet.create({
  container: {

  },
  dummyButtons: {
    height: 78,
    width: '100%',
    marginTop: 20
  },
  dummyGraph: {
    height: 210,
    width: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: "100",
    alignSelf: "center"
  },
  balance: {
    fontSize: 50,
    fontWeight: "100"
  },
  date: {
    fontSize: 20,
    fontWeight: "200",
    paddingBottom: 20
  },
  symbol: {
    paddingTop: 19,
    fontSize: 30,
    fontWeight: "400"
  },
  rowB: {
    borderTopWidth: 0.5,
    borderColor: '#9a9a9a',
    
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',

  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'center',
  },
  column: {
    flex: 1,
    paddingVertical: 10,
  },
  counterparty: {
    color: '#222',
    fontSize: 20,
    fontWeight: '300',
  },
  category: {
    color: '#222',
    fontSize: 16,
    fontWeight: '200',
  },
  amount: {
    color: '#000',
    fontSize: 20,
    // fontWeight: 'bold',
  },
  currency: {
    color: '#888',
    fontSize: 16,
    paddingTop: 4,
    paddingLeft: 5
    // fontWeight: 'bold',
  },
});
