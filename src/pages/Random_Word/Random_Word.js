import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import AwesomeAlert from 'react-native-awesome-alerts';
import IconButton from '../../components/IconButton';
import styles from './Random_Word.style';

const realm = new Realm({path: 'WordDatabase.realm'});

function Random_Word() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomIngWord, setRandomIngWord] = useState('');
  const [TurkWord, setTurkWord] = useState('');
  // Alert states
  const [errorAlert, setErrorAlert] = useState(false);
  const [correctAlert, setCorrectAlert] = useState(false);
  const [wrongAlert, setWrongAlert] = useState(false);

  var word_details = realm.objects('Word_Schema');
  var word_counter = word_details.length;

  // Alert functions.
  const ShowErrorAlert = () => {
    setErrorAlert(true);
  };
  const HideErrorAlert = () => {
    setErrorAlert(false);
  };
  const ShowCorrectAlert = () => {
    setCorrectAlert(true);
  };
  const HideCorrectAlert = () => {
    setCorrectAlert(false);
  };
  const ShowWrongAlert = () => {
    setWrongAlert(true);
  };
  const HideWrongAlert = () => {
    setWrongAlert(false);
  };

  // Random Number Creater
  const handleRandomWordClick = () => {
    setTurkWord('');
    var random_number = Math.floor(Math.random() * (word_counter - 0)) + 0;
    setRandomNumber(random_number);
    console.log('Random number: ' + random_number);
    var intermediate_word = word_details[random_number].english_word;
    setRandomIngWord(intermediate_word);
  };

  // Cevabın Kontrol Edilmesi.
  const handleWordCheck = () => {
    if (!TurkWord) {
      ShowErrorAlert();
      return;
    }
    if (TurkWord === word_details[randomNumber].turkish_word) {
      ShowCorrectAlert();
      setTurkWord('');
    } else {
      ShowWrongAlert();
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
      {/* Alert Components - Error - Correct - Wrong */}
      <AwesomeAlert
        show={errorAlert}
        showProgress={false}
        title="HATA"
        message="Türkçe karşılığını girmediniz."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        //cancelText="No, cancel"
        confirmText="Tekrar Dene"
        confirmButtonColor="orange"
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          HideErrorAlert();
        }}
      />
      <AwesomeAlert
        show={correctAlert}
        showProgress={false}
        title="Doğru :)"
        message="Cevabı doğru olarak bildiniz."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        //cancelText="No, cancel"
        confirmText="Devam Et"
        confirmButtonColor="orange"
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          HideCorrectAlert();
        }}
      />
      <AwesomeAlert
        show={wrongAlert}
        showProgress={false}
        title="Maalesef :("
        message="Cevabı yanlış tahmin ettiniz."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        //cancelText="No, cancel"
        confirmText="Tekrar Dene"
        confirmButtonColor="orange"
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          HideWrongAlert();
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <IconButton
          icon="restore"
          buttonTitle="Rastgele"
          onPress={handleRandomWordClick}
        />
        <IconButton
          icon="check-circle-outline"
          buttonTitle="Kontrol Et"
          onPress={handleWordCheck}
        />
      </View>
    </View>
  );
}

export default Random_Word;
