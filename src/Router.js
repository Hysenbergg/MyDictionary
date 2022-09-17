import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Bu özellik sayesinde tab seçeneklerine icon verdik.
import AddToWordPage from './pages/AddToWordPage';
import ListingWordsPage from './pages/ListingWordsPage';
import WordTestPage from './pages/WordTestPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({     // Burası hangi sayfada oldugumuzu kontrol ediyor ve ona göre stil veriyor gibi.
          headerStyle:{backgroundColor: '#2D956A'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          // İconları burada belirledik.
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'AddToWordPage') {
              iconName = focused
                ? 'add-circle'
                : 'add-circle-outline';
            } else if (route.name === 'ListingWordsPage') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'WordTestPage') {
              iconName = focused ? 'repeat' : 'repeat';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2D956A',   // o sayfadaykenki rengi
          tabBarInactiveTintColor: 'gray', // tıklı değilkenki rengi
        })}
      > 
          <Tab.Screen name="AddToWordPage" component={AddToWordPage} />
          <Tab.Screen name="ListingWordsPage" component={ListingWordsPage}  />
          <Tab.Screen name="WordTestPage" component={WordTestPage} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
