import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
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
  const ShowErrorAlert = () => {
    setErrorAlert(true);
  };
  const hideErrorAlert = () => {
    setErrorAlert(false);
  };
  const ShowSubmitCompAlert = () => {
    setSubmitCompAlert(true);
  };
  const HideSubmitCompAlert = () => {
    setSubmitCompAlert(false);
  };

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
        english_word: ingWord,
        turkish_word: turkWord,
        word_category: wordCategory,
      });
      ShowSubmitCompAlert();
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
      {/* RadioButton's Component */}
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
              <RadioButton value="günlük yasam" color="orange" />
              <Text style={{color: 'black', fontSize: 15}}>Günlük Yaşam</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="meslek" color="orange" />
              <Text style={{color: 'black', fontSize: 15}}>Meslek</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="egitim" color="orange" />
              <Text style={{color: 'black', fontSize: 15}}>Eğitim</Text>
            </View>
          </View>
          <>
            {() => {
              value;
            }}
          </>
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
      <Button ButtonText="Kaydet" onClick={handleSubmit} />
    </View>
  );
}

export default Add_Word;
