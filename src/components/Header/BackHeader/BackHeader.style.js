import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  icon_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '700',
  },
  empty_container: {
    width: 45,
    height: 45,
  },
});
