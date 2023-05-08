import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
  },
  logo: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    tintColor: 'orange',
    alignSelf: 'center',
  },
  buttons_container: {
    flex: 1,
  },

  /* MODAL */
  modal_container: { flex: 1, margin: 20, borderRadius: 15, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white' },
  modal_top_container: { margin: 10, marginLeft: 15, flexDirection: 'row', alignItems:'center' },
  modal_top_title: { flex: 1, fontSize: 20, color: 'black' },
  modal_seperator: { borderTopWidth: 1, borderColor: 'orange' },
  modal_logo_container: { alignItems: 'center' },
  modal_logo: { height: 200, width: 200, resizeMode: 'contain' },
  modal_content_container: { marginTop: 20 },
  modal_content: { color: 'black', fontSize: 15, margin: 7 },
  modal_second_seperator_container: { alignItems: 'center' },
  modal_second_seperator: { fontSize: 20 },
  modal_contact_container: { alignItems: 'center' },
  modal_contact: { fontSize: 18, color: 'black' },
  modal_contact_inner_container: { flexDirection: 'row', alignItems: 'center' },
  modal_mail_container: { flexDirection: 'row', borderWidth: 1, justifyContent: 'center', margin: 10, borderRadius: 10, borderColor: 'black' },
  modal_mail_content: { color: 'black', fontSize: 15, fontWeight: '600', padding: 7 }
});
