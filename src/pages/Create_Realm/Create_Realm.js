import React, {useState} from 'react';
import {SafeAreaView, View, Image, Modal,Pressable, Text } from 'react-native';
import Button from '../../components/Button';
import styles from './Create_Realm.style';
import Realm from 'realm';
import IconButton from '../../components/IconButton';

function Create_Realm({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
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
        <View style={{flex: 1, margin: 20, borderRadius: 15, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',}}>
          <View style={{margin: 20, flexDirection: 'row', alignItems:'center' }}>
            <Text style={{flex: 1, fontSize: 20, color: 'black',}}>Ben Kimim?</Text>
            <IconButton icon="close-circle-outline" buttonTitle="Kapat" onPress={() => hideModal()} />
          </View>
          <View>
            <Text style={{borderTopWidth: 1, borderColor: 'black'}}></Text>
          </View>
          <View style={{alignItems: 'center'}}>
            {/*<Image style={{ height: 125, width: 125, resizeMode: 'contain', borderRadius: 10, borderWidth: 1, borderColor: 'orange' }} source={require('../../assets/Hysenberg.jpeg')}/> */}
            <Text style={{ fontSize: 32, color: 'black', margin: 3, fontWeight: '500'}}>Hüseyin Zeyrek</Text>
          </View>
          <View>
            <Text>  </Text>
          </View>
          <Text>Burası modal</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Kapat</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Create_Realm;
