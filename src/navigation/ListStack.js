import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryListPage from '../pages/CategoryListPage/CategoryListPage';
import List_Words from '../pages/List_Words/List_Words';

const Stack = createNativeStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='CategoryList' component={CategoryListPage} />
        <Stack.Screen name='ListWords' component={List_Words} />
    </Stack.Navigator>
  )
}

export default ListStack