import React from 'react';

// For Tab Screen 
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Stack Constructor
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Import Pages
import Create_Realm from './src/pages/Create_Realm';
import Add_Word from './src/pages/Add_Word.js/Add_Word';
import List_Words from './src/pages/List_Words';
import Random_Word from './src/pages/Random_Word';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='CreateRealmPages' component={Create_Realm}/>
        <Stack.Screen name='AddWordPages' component={Add_Word}/>
        <Stack.Screen name='ListWordsPages' component={List_Words}/>
        <Stack.Screen name='RandomWordPages' component={Random_Word}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;