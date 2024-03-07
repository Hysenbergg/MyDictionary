import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './BackHeader.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../styles/colors';

export default function BackHeader({title, onPress, iconName}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_container} onPress={onPress}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={22}
          color={colors.black}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={iconName === 'none' ? styles.empty_container : [styles.icon_container, {borderColor: colors.primary}]}>
        {iconName !== 'none' && (
          <MaterialCommunityIcons name={iconName} size={22} color={colors.primary} />
        ) }
      </View>
    </View>
  );
}
