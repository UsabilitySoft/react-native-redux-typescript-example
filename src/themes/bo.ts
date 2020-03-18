
import { StyleSheet } from 'react-native';

const colours = {
  white: 'white',
  black: 'black',
  grey: '#555'
}
export const app = StyleSheet.create({
  scrollView: {
    backgroundColor: colours.white,
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
  row: {
    flexDirection: 'row',
    minHeight: 70,
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
    fontWeight: 'bold',
  },
  category: {
    color: '#777',
    fontSize: 20,
    fontWeight: 'bold',
  },
  amount: {
    color: '#888',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
