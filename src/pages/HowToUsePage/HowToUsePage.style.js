import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo_container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  question_container: {
    margin: 5,
  },
  question_inner_container: {
    marginBottom: 15,
  },
  question_title_container: {
    padding: 5,
    backgroundColor: 'orange',
    borderTopRightRadius: 10,
  },
  question_title: {
    color: 'white',
    fontSize: 18,
  },
  question_describe_container: {
    padding: 5,
    backgroundColor: 'lightgray',
  },
  question_describe: {
    color: 'black'
  },
});
