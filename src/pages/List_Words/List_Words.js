import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView, Alert} from 'react-native';
import styles from './List_Words.style';
import SearchBar from '../../components/SearchBar';
import IconButton from '../../components/IconButton';
import AwesomeAlert from 'react-native-awesome-alerts';

const realm = new Realm({path: 'WordDatabase.realm'});

function List_Words({navigation}) {
  var questions = realm.objects('Word_Schema');
  const [list, setList] = useState(questions);
  const [selected_word_id, setSelectedWord_id] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);

  const ShowErrorAlert = () => {
    setErrorAlert(true);
  };
  const hideErrorAlert = () => {
    setErrorAlert(false);
  };

  // Arama kutucuğu componentinin calisma mekanizması.
  const handleSearch = text => {
    const filteredText = questions.filter(word => {
      const searchedText = text.toLowerCase();
      const currentTitle = word.english_word.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredText);
  };

  const handleWordDeleted = selectedWordId => {
    setSelectedWord_id(selectedWordId);
    realm.write(() => {
      const worddd = realm.objects('Word_Schema').filtered(`word_id = ${selectedWordId}`);
      if(worddd.length > 0) {
        realm.delete(worddd);
        const updatedWords = realm.objects('Word_Schema');
        setList(updatedWords);
      }else {
        Alert.alert('Hata', 'İlgili Id adına bir kelime bulunamadı.', [{ text: 'Ok' }], {
          cancelable: false,
        });
      }
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}> Listem </Text>
        <IconButton
          icon="plus"
          buttonTitle="Kelime Ekle"
          onPress={() => navigation.navigate('AddWordPages')}
        />
      </View>
      <ScrollView>
        <SearchBar onSearch={handleSearch} />
        {list.map((words, index) => (
          <View key={index} style={styles.word_container}>
            <View style={styles.id_container}>
              <Text style={styles.id}> {words.word_id} </Text>
            </View>
            <View style={styles.deneme}>
              <View style={styles.word_inner_container}>
                <Text style={styles.english_word}>{words.english_word}: </Text>
                <Text style={styles.turkish_word}>{words.turkish_word} </Text>
              </View>
              <View style={styles.iconbutton}>
                <IconButton
                  icon="trash-can"
                  buttonTitle="Sil"
                  onPress={() => handleWordDeleted(words.word_id)}
                />
              </View>
            </View>
          </View>
        ))}
        <AwesomeAlert
          show={errorAlert}
          showProgress={false}
          title="Silindi"
          message="Kelime silme işleminiz başarılı bir şekilde yapıldı."
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
            hideErrorAlert();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default List_Words;
