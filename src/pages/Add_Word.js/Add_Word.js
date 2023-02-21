import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import styles from './Add_Word.style';
import Realm from 'realm';
let realm;

function Add_Word({navigation}) {
  const [ingWord, setIngWord] = useState('');
  const [turkWord, setTurkWord] = useState('');
  const [wordCategory, setWordCategory] = useState('');

  useEffect(() => {
    realm = new Realm({path: 'WordDatabase.realm'});
  }, []);

  const handleSubmit = () => {
    if (!ingWord || !turkWord || !wordCategory) {
      Alert.alert('Lütfen boşta bir alan var, boş bırakmayınız.');
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
        word_category: wordCategory,
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
      console.log(
        'Kelimeler eklendi: ' +
          ' id: ' +
          ID +
          ' ' +
          ingWord +
          ' ' +
          turkWord +
          ' cat: ' +
          wordCategory,
      );
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
      <View>
        <RadioButton.Group
          onValueChange={newValue => setWordCategory(newValue)}
          value={wordCategory}>
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              margin: 10,
              borderRadius: 15,
              borderColor: 'orange',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="günlük yasam" color='orange'/>
              <Text>Günlük Yaşam</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="meslek" color='orange' />
              <Text>Meslek</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="egitim" color='orange' />
              <Text>Eğitim</Text>
            </View>
          </View>
          <>
            {() => {
              value;
            }}
          </>
        </RadioButton.Group>
      </View>
      <Button ButtonText="Kaydet" onClick={handleSubmit} />
    </View>
  );
}

export default Add_Word;
