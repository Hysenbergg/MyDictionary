import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import TextInput from '../../components/TextInput';
import AwesomeAlert from 'react-native-awesome-alerts';
import IconButton from '../../components/IconButton';
import styles from './Random_Word.style';
import Button from '../../components/Button/Button';
import {colors} from '../../styles/colors';
import {showMessage} from 'react-native-flash-message';
import MainHeader from '../../components/Header/MainHeader';

const realm = new Realm({path: 'WordDatabase.realm'});

function Random_Word() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomIngWord, setRandomIngWord] = useState('');
  const [TurkWord, setTurkWord] = useState('');
  const [turkceKarsiligi, setTurkKarsiligi] = useState('Türkçe Karşılığı');
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
    var intermediate_word = word_details[random_number].english_word;
    setRandomIngWord(intermediate_word);
    setTurkKarsiligi('Türkçe Karşılığı');
  };

  // Cevabın Kontrol Edilmesi.
  const handleWordCheck = () => {
    if (!TurkWord) {
      ShowErrorAlert();
      return;
    }
    if (TurkWord.toLowerCase() === word_details[randomNumber].turkish_word) {
      ShowCorrectAlert();
      setTurkWord('');
    } else {
      ShowWrongAlert();
      setTurkWord('');
    }
  };

  // Türkçesi göstermek için kullanıyoruz.
  const TurkceKarsiligi = () => {
    if (randomIngWord === '') {
      showMessage({
        message: 'İngilizce kelime yokken anlamına bakmaya çalıştınız.',
        type: 'danger',
      });
      return;
    } else if (TurkWord === '') {
      showMessage({
        message: 'Turkce kelime tahmininde bulunmadınız!',
        type: 'danger',
      });
      return;
    } else {
      setTurkKarsiligi(word_details[randomNumber].turkish_word);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Kendini Test Et" color={colors.primary} />
      <View style={styles.input_container}>
        <TextInput
          value={randomIngWord}
          placeholder="İngilizce Kelime"
          editable={false}
        />
        <TextInput
          placeholder="Türkçe Karşılığını giriniz.."
          value={TurkWord}
          onchange={setTurkWord}
        />
        <View style={styles.button_container}>
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
      <View style={styles.turkish_word_container}>
        <IconButton
          icon="eye"
          buttonTitle="Türkçe Anlamı"
          onPress={TurkceKarsiligi}
        />
        <View style={styles.turkish_word_inner_container}>
          <Text style={styles.turkish_word}>{turkceKarsiligi} </Text>
        </View>
      </View>

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
        confirmButtonColor={colors.primary}
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
        confirmButtonColor={colors.primary}
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
        confirmButtonColor={colors.primary}
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          HideWrongAlert();
        }}
      />
    </View>
  );
}

export default Random_Word;
