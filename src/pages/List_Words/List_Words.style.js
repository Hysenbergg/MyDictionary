import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1,margin: 10, padding: 10},
  title: {
    backgroundColor: 'gray',
    fontSize: 32,
    textAlign: 'center',
    color: '#e7aa0a',
    borderRadius: 15,
    padding: 7,
    fontWeight: 'bold',
  },
  word_container: {
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 15,
    padding: 15,
    paddingBottom: 20
  },
  word_no: {
    textAlign: 'center',
    fontSize: 32,
    color: 'orange',
    fontWeight: 'bold',
  },
  word_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  word_isaret: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600'
  },
  word: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600'
  },
});
