import React from 'react';
import Realm from 'realm';
import FlashMessage from 'react-native-flash-message';

// Import Stack Constructor
import {NavigationContainer} from '@react-navigation/native';

// Import Pages
//import TabBottom from './navigation/TabBottom';
import InitialStack from './navigation/InitialStack';

function Router() {

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
    <NavigationContainer>
      <InitialStack />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;