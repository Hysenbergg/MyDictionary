import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView, Alert} from 'react-native';
import styles from './List_Words.style';
import SearchBar from '../../components/SearchBar';
import {IconButton} from 'react-native-paper';
import {colors} from '../../styles/colors';
import BackHeader from '../../components/Header/BackHeader';

const realm = new Realm({path: 'WordDatabase.realm'});

function List_Words({navigation, route}) {
  var words = realm.objects('Word_Schema');
  const {category} = route.params;

  //words yazıyordu.
  const [list, setList] = useState([]);
  const [selected_word_id, setSelectedWord_id] = useState('');

  // Kategori list sayfasından gelen kategori bilgisi ile veri tabanındaki aynı kategorili
  function Listing(data) {
    const filtered_list = data.filter(word => word.word_category === category);
    setList(filtered_list);
  }

  useEffect(() => {
    Listing(words);
  }, []);

  // Arama kutucuğu componentinin calisma mekanizması.
  const handleSearch = text => {
    if (text === '') {
      Listing(words);
    } else {
      const filteredText = list.filter(word => {
        const searchedText = text.toLowerCase();
        const currentTitle = word.english_word.toLowerCase();

        return currentTitle.indexOf(searchedText) > -1;
      });

      setList(filteredText);
    }
  };

  // Listeden kelimenin silinmesi işlemi.
  const handleWordDeleted = selectedWordId => {
    setSelectedWord_id(selectedWordId);
    realm.write(() => {
      const worddd = realm
        .objects('Word_Schema')
        .filtered(`word_id = ${selectedWordId}`);
      if (worddd.length > 0) {
        realm.delete(worddd);
        const updatedWords = realm.objects('Word_Schema');
        Listing(updatedWords);
      } else {
        Alert.alert(
          'Hata',
          'İlgili Id adına bir kelime bulunamadı.',
          [{text: 'Ok'}],
          {
            cancelable: false,
          },
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        title="Kelime Listesi"
        onPress={() => navigation.goBack()}
        iconName="plus"
      />
      <ScrollView style={{marginHorizontal: 7}}>
        <SearchBar onSearch={handleSearch} />
        {list.map((words, index) => (
          <View key={index} style={styles.word_container}>
            <View style={styles.id_container}>
              <Text style={styles.id}> {index + 1} </Text>
            </View>
            <View style={styles.deneme}>
              <View style={styles.word_inner_container}>
                <Text style={styles.english_word}>{words.english_word}: </Text>
                <Text style={styles.turkish_word}>{words.turkish_word} </Text>
              </View>
              <View style={styles.iconbutton}>
                <IconButton
                  icon="trash-can-outline"
                  iconColor={colors.white}
                  size={24}
                  onPress={() => handleWordDeleted(words.word_id)}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default List_Words;
