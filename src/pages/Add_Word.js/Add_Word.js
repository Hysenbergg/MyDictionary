import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import styles from './Add_Word.style';
import Realm from 'realm';
let realm;

function Add_Word({navigation}) {
  const [ingWord, setIngWord] = useState('');
  const [turkWord, setTurkWord] = useState('');

  useEffect(() => {
    realm = new Realm({path: 'WordDatabase.realm'});
  }, []);

  const handleSubmit = () => {
    if (!ingWord) {
      Alert.alert('Lütfen İngilizce kelime alanını doldurunuz.');
      return;
    }
    if (!turkWord) {
      Alert.alert('Lütfen Türkçe kelime alanını doldurunuz.');
      return;
    }
    realm.write(() => {
      var ID =
        realm.objects('Word_Schema').sorted('word_id', true).length > 0
          ? realm.objects('Word_Schema').sorted('word_id', true)[0].word_id + 1
          : 1;
      realm.create('Word_Schema', {
        word_id: ID,
        english_word: ingWord,
        turkish_word: turkWord,
      });
      Alert.alert(
        'Success',
        'Kelime ekleme işlemi başarılı bir şekilde gerçekleştirildi.',
        [
          {
            text: 'Tamam',
            onPress: () => navigation.navigate('CreateRealmPages'),
          },
        ],
        {cancelable: false},
      );
      console.log('Kelimeler eklendi: ' + " id: " + ID + " " + ingWord + " " + turkWord);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Kelime Ekleme Sayfası </Text>
      <TextInput
        placeholder="İngilizce Kelimeyi Giriniz"
        value={ingWord}
        onchange={setIngWord}
      />
      <TextInput
        placeholder="Türkce Kelimeyi Giriniz"
        value={turkWord}
        onchange={setTurkWord}
      />
      <Button ButtonText="Kaydet" onClick={handleSubmit} />
    </View>
  );
}

export default Add_Word;
