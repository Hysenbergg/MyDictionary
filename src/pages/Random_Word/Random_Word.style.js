import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  title_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'orange',
    textAlign: 'center',
    justifyContent: 'center',
  },
  random_word_container: {
    margin: 10,
    alignItems: 'center',
  },
  ing_word_title: {
    fontSize: 24,
    marginTop: 20,
    color: 'black',
    textDecorationLine: 'underline',
  },
  ing_word: {
    fontSize: 24,
    marginTop: 10,
    color: 'orange',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'orange',
  },
});
