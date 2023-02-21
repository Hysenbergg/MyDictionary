import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './List_Words.style';
import SearchBar from '../../components/SearchBar';

const realm = new Realm({path: 'WordDatabase.realm'});

function List_Words() {
  var questions = realm.objects('Word_Schema');
  const [list, setList] = useState(questions);

  const handleSearch = text => {
    const filteredText = questions.filter(word => {
      const searchedText = text.toLowerCase();
      const currentTitle = word.english_word.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Kelimelerim </Text>
      <ScrollView>
        <SearchBar onSearch={handleSearch} />
        {list.map((words, index) => (
          <View key={index} style={styles.word_container}>
            <Text style={styles.word_no}> {words.word_id} </Text>
            <View style={styles.word_inner_container}>
              <Text style={styles.word}>{words.english_word} </Text>
              <Text style={styles.word_isaret}>=</Text>
              <Text style={styles.word}>{words.turkish_word} </Text>
            </View>
            <Text style={styles.category_text}>{words.word_category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default List_Words;
