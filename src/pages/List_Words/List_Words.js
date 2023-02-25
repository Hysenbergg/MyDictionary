import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from './List_Words.style';
import SearchBar from '../../components/SearchBar';
import IconButton from '../../components/IconButton';

const realm = new Realm({path: 'WordDatabase.realm'});

function List_Words({navigation}) {
  var questions = realm.objects('Word_Schema');
  const [list, setList] = useState(questions);

  // Arama kutucuğu componentinin calisma mekanizması.
  const handleSearch = text => {
    const filteredText = questions.filter(word => {
      const searchedText = text.toLowerCase();
      const currentTitle = word.english_word.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}> Listem </Text>
        <IconButton icon="plus" buttonTitle="Kelime Ekle" onPress={() => navigation.navigate('AddWordPages')} />
      </View>
      <ScrollView>
        <SearchBar onSearch={handleSearch} />
        {list.map((words, index) => (
          <View key={index} style={styles.word_container}>
            <View style={styles.id_container}>
              <Text style={styles.id}> {words.word_id} </Text>
            </View>
            <View style={styles.word_inner_container}>
              <Text style={styles.english_word}>{words.english_word}: </Text>
              <Text style={styles.turkish_word}>{words.turkish_word} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default List_Words;
