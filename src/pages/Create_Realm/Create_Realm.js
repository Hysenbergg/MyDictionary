import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import Button from '../../components/Button';
import styles from './Create_Realm.style';
import Realm from 'realm';

function Create_Realm({navigation}) {
  new Realm({
    path: 'WordDatabase.realm',
    schema: [
      {
        name: 'Word_Schema',
        properties: {
          word_id: {type: 'int', default: 0},
          english_word: 'string',
          turkish_word: 'string',
          word_category: 'string',
        },
      },
    ],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container} >
        <Image style={styles.logo} source={require('../../assets/MyDictionaryLogo.png')} />
      </View>
      <View style={styles.buttons_container}>
        <Button
          ButtonText="Kelime Ekle"
          onClick={() => navigation.navigate('AddWordPages')}
        />
        <Button
          ButtonText="Listen"
          onClick={() => navigation.navigate('ListWordsPages')}
        />
        <Button
          ButtonText="Kendini Dene"
          onClick={() => navigation.navigate('RandomWordPages')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Create_Realm;
