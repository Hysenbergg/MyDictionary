import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    margin: 24,
    fontWeight: 'bold',
  },
  input_container: {
    margin: 10,
  },
  radioButton_group_container: {
    margin: 10,
  },
  radioButton_group_inner_container: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    borderColor: colors.primary,
  },
  radioButton_container: {flexDirection: 'row', alignItems: 'center', flex: 1},
  radioButton_category_name: {color: colors.black, fontSize: 15},
});
