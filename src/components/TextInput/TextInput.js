import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './TextInput.style';
import { colors } from '../../styles/colors';

function Input({placeholder, value, onchange, editable = true}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, editable === false && {color: colors.gray}]}
        placeholder={placeholder}
        value={value}
        onChangeText={onchange}
        editable={editable}
      />
    </View>
  );
}

export default Input;
