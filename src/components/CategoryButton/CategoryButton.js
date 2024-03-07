import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CategoryButton.style';

export default function CategoryButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.elevation, styles.container]}
      onPress={onPress}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}
