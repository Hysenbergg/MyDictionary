import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './TextInput.style';

function Input({placeholder, value, onchange}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder={placeholder} value={value} onChangeText={onchange}/>
    </View>
  )
}

export default Input;