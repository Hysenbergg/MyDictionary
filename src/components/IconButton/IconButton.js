import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './IconButton.styles';

const IconButton = ({icon, buttonTitle, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={21} color='white' />
    <Text style={styles.title}>{buttonTitle}</Text>
  </TouchableOpacity>
);

export default IconButton;
