import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  refresh_btn_container: {
    alignItems: 'flex-end',
    marginHorizontal: 20    
  },
  refresh_icon_btn: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: colors.gray,
  },
  refresh_btn_title: {
    fontSize: 18, 
    marginRight: 5,
    color: colors.white
  },
  empty_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingBottom: 100
  },
  empty_title: {
    color: colors.black,
    fontSize: 19
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
