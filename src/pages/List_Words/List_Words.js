import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './List_Words.style';

const realm = new Realm({path: 'WordDatabase.realm'});

function List_Words() {
  var questions = realm.objects('Word_Schema');

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Kelimelerim </Text>
      <ScrollView>
        {questions.map((words, index) => (
          <View key={index} style={styles.word_container}>
            <Text style={styles.word_no}> {words.word_id} </Text>
            <View style={styles.word_inner_container}>
              <Text style={styles.word} >{words.english_word} </Text>
              <Text style={styles.word_isaret}>- | -</Text>
              <Text style={styles.word}>{words.turkish_word} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default List_Words;