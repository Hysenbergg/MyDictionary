import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 100,
  },
  title: {
    fontSize: 32,
    color: 'orange',
  },
  random_word_container: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ing_word_title: {
    fontSize: 22,
    padding: 10,
    fontWeight: '400',
    color: 'black',
  },
  ing_word_cont: {
    borderWidth: 1,
    width: 150,
    height: 30,
    alignItems: 'center',
  },
  ing_word: {
    fontSize: 18,
    color: 'orange',
  },
  input_container: {marginLeft: 20, marginRight: 20},
  button_container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
