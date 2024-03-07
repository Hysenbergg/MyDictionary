import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input_container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  button_container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  turkish_word_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  turkish_word_inner_container: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 15,
    marginLeft: 15,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderStyle: 'dashed',
  },
  turkish_word: {
    fontSize: 21,
    color: colors.primary,
  },
});
