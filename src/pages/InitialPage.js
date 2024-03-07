import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../styles/colors';

export default function InitialPage({navigation}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('BottomTab')}>
      <Image
        style={styles.image}
        source={require('../assets/mydictionary-logo.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
});
