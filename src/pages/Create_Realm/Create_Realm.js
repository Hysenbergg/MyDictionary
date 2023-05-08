import React, {useState} from 'react';
import {SafeAreaView, View, Image, Modal, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import Button from '../../components/Button';
import styles from './Create_Realm.style';
import Realm from 'realm';
import Clipboard from '@react-native-clipboard/clipboard';

function Create_Realm({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [mail, setMail] = useState("huseyinsaidzeyrek@gmail.com");

  new Realm({
    path: 'WordDatabase.realm',
    schema: [
      {
        name: 'Word_Schema',
        properties: {
          word_id: {type: 'int', default: 0},
          english_word: 'string',
          turkish_word: 'string',
          word_category: 'string',
        },
      },
    ],
  });

  const showModal = () => {
    setModalVisible(true);
  }

  const hideModal = () => {
    setModalVisible(false);
  }

  const handleCopiedMail = () => {
    Clipboard.setString(mail);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container} >
        <Image style={styles.logo} source={require('../../assets/MyDictionaryLogo.png')} />
      </View>
      <View style={styles.buttons_container}>
        <Button
          ButtonText="Kelime Ekle"
          onClick={() => navigation.navigate('AddWordPages')}
        />
        <Button
          ButtonText="Listen"
          onClick={() => navigation.navigate('ListWordsPages')}
        />
        <Button
          ButtonText="Kendini Dene"
          onClick={() => navigation.navigate('RandomWordPages')}
        />
        <Button
          ButtonText="Nasıl Kullanılır"
          onClick={() => navigation.navigate('HowToUsePage')}
        />
        <Button
          ButtonText="Hakkımda"
          onClick={() => showModal()}
        />
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modal_container}>
          <View style={styles.modal_top_container}>
            <Text style={styles.modal_top_title}>Ben Kimim?</Text>
            <IconButton icon="close-circle-outline" iconColor='black' size={30} onPress={() => hideModal()} />
          </View>
          <View>
            <Text style={styles.modal_seperator}></Text>
          </View>
          <View style={styles.modal_logo_container}>
            <Image style={styles.modal_logo} source={require('../../assets/MyLogo.png')}/>
          </View>
          <View style={styles.modal_content_container}>
            <Text style={styles.modal_content}> Bilgisayar Mühendisi adayıyım. Kendimi mobil programlama alanında geliştirmekteyim. Bu uygulamayı İngilizce kelime haznesinde sorun yaşayan ben ve benim gibi kişiler için oluşturmak istedim. Kişisel sözlüğünüzü yöneterek kelime haznenizi geliştirebilirsiniz.</Text>
          </View>
          <View style={styles.modal_second_seperator_container}>
            <Text style={styles.modal_second_seperator}>-----------------------------------------</Text>
          </View>
          <View style={styles.modal_contact_container}>
            <Text style={styles.modal_contact}>İletişim Bilgileri</Text>
            <View style={styles.modal_contact_inner_container}>
              <View style={styles.modal_mail_container}>
                <Text style={styles.modal_mail_content}>Mail: </Text>
                <Text style={styles.modal_mail_content}>{mail}</Text> 
              </View>
              <View>
                <IconButton icon="content-copy" iconColor='black' size={20} onPress={handleCopiedMail}/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Create_Realm;
