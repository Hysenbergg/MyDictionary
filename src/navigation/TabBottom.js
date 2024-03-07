import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon, {Icons} from '../components/Icons';

// import stacks
import Add_Word from '../pages/Add_Word.js/Add_Word';
import Random_Word from '../pages/Random_Word/Random_Word';
import ListStack from './ListStack';

const TabArr = [
  {
    route: 'AddWordPage',
    label: 'Kelime Ekle',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'text-box-plus',
    inActiveIcon: 'text-box-plus-outline',
    component: Add_Word,
  },
  {
    route: 'ListStack',
    label: 'Liste',
    type: Icons.Ionicons,
    activeIcon: 'list-circle',
    inActiveIcon: 'list-circle-outline',
    component: ListStack,
  },
  {
    route: 'RandomWord',
    label: 'Egzersiz Yap',
    type: Icons.Ionicons,
    activeIcon: 'reload-circle',
    inActiveIcon: 'reload-circle-outline',
    component: Random_Word,
  },
];

const Tab = createBottomTabNavigator();

const TabButtonComponent = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.primary : colors.gray}
          size={27}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="ListStack"
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButtonComponent {...props} item={item} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
