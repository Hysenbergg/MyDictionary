import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import styles from './Add_Word.style';
import AwesomeAlert from 'react-native-awesome-alerts';
import Realm from 'realm';
import MainHeader from '../../components/Header/MainHeader';

let realm;

const categoryNames = [
  {
    id: 0,
    title: 'Seyahat',
    value: 'travel',
  },
  {
    id: 1,
    title: 'Sağlık',
    value: 'health',
  },
  {
    id: 2,
    title: 'Eğitim',
    value: 'education',
  },
  {
    id: 3,
    title: 'Teknoloji',
    value: 'technology',
  },
  {
    id: 4,
    title: 'Spor',
    value: 'sports',
  },
  {
    id: 5,
    title: 'Sanat',
    value: 'art',
  },
  {
    id: 6,
    title: 'Hava Durumu',
    value: 'weather',
  },
  {
    id: 7,
    title: 'İş Dünyası',
    value: 'business',
  },
  {
    id: 8,
    title: 'Sosyal İlişkiler',
    value: 'social',
  },
  {
    id: 9,
    title: 'Hobiler',
    value: 'hobbies',
  },
];

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

  // yeni kelime ekleme fonksiyonu.
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
      <MainHeader title="Kelime Ekle" />
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
          <View style={styles.radioButton_group_inner_container}>
            <FlatList
              data={categoryNames}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({item}) => (
                <View key={item.id} style={styles.radioButton_container}>
                  <RadioButton value={item.value} color="orange" />
                  <Text style={styles.radioButton_category_name}>
                    {item.title}
                  </Text>
                </View>
              )}
            />
            
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
          setIngWord('');
          setTurkWord('');
          setWordCategory('');
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
