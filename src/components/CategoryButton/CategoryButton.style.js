import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {color: 'white', fontSize: 18},
  elevation: {
    elevation: 10,
    shadowColor: colors.gray,
  },
});
