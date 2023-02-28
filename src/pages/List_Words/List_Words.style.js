import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title_container: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: 8,
    borderRadius: 5
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  deneme: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  word_container: {
    margin: 5,
    marginLeft: 8,
    flexDirection: 'row',
  },
  id_container: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  id: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
  word_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  english_word: {
    fontSize: 15
  },
  turkish_word: {
    fontSize: 18,
    color: 'black'
  },
  iconbutton: {}
});
