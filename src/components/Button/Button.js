import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

function Button({ButtonText, onClick}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button_container} onPress={onClick}>
        <Text style={styles.button_text}> {ButtonText} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
