import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title_container: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
  },
  deneme: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  word_container: {
    margin: 5,
    marginTop: 10,
    marginLeft: 8,
    flexDirection: 'row',
  },
  id_container: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.gray,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
  },
  id: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  word_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  english_word: {
    fontSize: 15,
  },
  turkish_word: {
    fontSize: 18,
    color: colors.black,
  },
  iconbutton: {backgroundColor: colors.gray, borderRadius: 50},

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
