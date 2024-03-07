import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from '../pages/InitialPage';
import BottomTab from './TabBottom';

const Stack = createNativeStackNavigator();

export default function InitialStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='InitialPage' component={InitialPage} />
        <Stack.Screen name='BottomTab' component={BottomTab} />
    </Stack.Navigator>
  )
}
