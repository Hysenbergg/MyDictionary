import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import styles from './Random_Word.style';

const realm = new Realm({path: 'WordDatabase.realm'});

function Random_Word() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomIngWord, setRandomIngWord] = useState('');
  const [TurkWord, setTurkWord] = useState('');
  var word_details = realm.objects('Word_Schema');
  var word_counter = word_details.length;

  // Random Number Creater
  const handleRandomWordClick = () => {
    setTurkWord('');
    var random_number = Math.floor(Math.random() * (word_counter - 0)) + 0;
    setRandomNumber(random_number);
    var intermediate_word = word_details[random_number].english_word;
    setRandomIngWord(intermediate_word);
  };

  // Cevabın Kontrol Edilmesi.
  const handleWordCheck = () => {
    if (!TurkWord) {
      Alert.alert('Lütfen Türkçe karşılığını giriniz! Boş bıraktınız.');
      return;
    }
    if (TurkWord === word_details[randomNumber].turkish_word) {
      Alert.alert('Cevabınız Doğru. Devam Edebilirsiniz.');
      setTurkWord('');
    } else {
      Alert.alert('Cevabınız Maalesef Yanlis. Tekrar Deneyiniz.');
      setTurkWord('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}> Rastgele Kelime Sayfası </Text>
      </View>
      <View style={styles.random_word_container}>
        <Text style={styles.ing_word_title}> İngilizce Kelime </Text>
        <Text style={styles.ing_word}> {randomIngWord} </Text>
      </View>
      <TextInput
        placeholder="Türkçe Karşılığını giriniz.."
        value={TurkWord}
        onchange={setTurkWord}
      />
      <Button ButtonText="Rastgele" onClick={handleRandomWordClick} />
      <Button ButtonText="Test Et" onClick={handleWordCheck} />
    </View>
  );
}

export default Random_Word;
