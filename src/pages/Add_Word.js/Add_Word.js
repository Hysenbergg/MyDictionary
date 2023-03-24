import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import styles from './Add_Word.style';
import AwesomeAlert from 'react-native-awesome-alerts';
import Realm from 'realm';
let realm;

function Add_Word({navigation}) {
  const [ingWord, setIngWord] = useState('');
  const [turkWord, setTurkWord] = useState('');
  const [wordCategory, setWordCategory] = useState('');
  // alert states
  const [errorAlert, setErrorAlert] = useState(false);
  const [submitCompAlert, setSubmitCompAlert] = useState(false);

  useEffect(() => {
    realm = new Realm({path: 'WordDatabase.realm'});
  }, []);

  // Alert functions
  function ShowErrorAlert() {
    setErrorAlert(true);
  }
  function hideErrorAlert() {
    setErrorAlert(false);
  }
  function ShowSubmitCompAlert() {
    setSubmitCompAlert(true);
  }
  function HideSubmitCompAlert() {
    setSubmitCompAlert(false);
  }

  const handleSubmit = () => {
    if (!ingWord || !turkWord || !wordCategory) {
      ShowErrorAlert();
      return;
    }

    realm.write(() => {
      var ID =
        realm.objects('Word_Schema').sorted('word_id', true).length > 0
          ? realm.objects('Word_Schema').sorted('word_id', true)[0].word_id + 1
          : 1;
      realm.create('Word_Schema', {
        word_id: ID,
        english_word: ingWord.toLowerCase(),
        turkish_word: turkWord.toLowerCase(),
        word_category: wordCategory,
      });
      ShowSubmitCompAlert();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Kelime Ekleme Sayfası </Text>
      <View style={styles.input_container}>
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
      </View>
      {/* RadioButton's Component */}
      <View style={styles.radioButton_group_container}>
        <RadioButton.Group
          onValueChange={newValue => setWordCategory(newValue)}
          value={wordCategory}>
          <View
            style={styles.radioButton_group_inner_container}>
            <View style={styles.radioButton_container}>
              <RadioButton value="günlük yasam" color="orange" />
              <Text style={styles.radioButton_category_name}>Günlük Yaşam</Text>
            </View>
            <View style={styles.radioButton_container}>
              <RadioButton value="egitim" color="orange" />
              <Text style={styles.radioButton_category_name}>Eğitim</Text>
            </View>
            <View style={styles.radioButton_container}>
              <RadioButton value="meslek" color="orange" />
              <Text style={styles.radioButton_category_name}>İş</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      {/* Alert Components - Error - Submit */}
      <AwesomeAlert
        show={errorAlert}
        showProgress={false}
        title="HATA"
        message="Zorunlu olan bir alanı bos bıraktınız."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        //cancelText="No, cancel"
        confirmText="Düzeltiyorum"
        confirmButtonColor="orange"
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          hideErrorAlert();
        }}
      />
      <AwesomeAlert
        show={submitCompAlert}
        showProgress={false}
        title="Başarılı"
        message="Kelime ekleme işlemi başarılı bir şekilde gerçekleşti."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        //cancelText="No, cancel"
        confirmText="Tamam"
        confirmButtonColor="orange"
        /*onCancelPressed={() => {
          hideAlert();
        }}*/
        onConfirmPressed={() => {
          HideSubmitCompAlert();
          navigation.navigate('CreateRealmPages');
        }}
      />
      <Button
        btnColor="orange"
        textColor="black"
        ButtonText="Kaydet"
        onClick={() => handleSubmit()}
      />
    </View>
  );
}

export default Add_Word;
