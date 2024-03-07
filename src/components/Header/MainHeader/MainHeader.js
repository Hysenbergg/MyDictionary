import React from 'react';
import {Text, View} from 'react-native';
import styles from './MainHeader.style';
import { colors } from '../../../styles/colors';

export default function MainHeader({title, color = colors.black}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </View>
  );
}
