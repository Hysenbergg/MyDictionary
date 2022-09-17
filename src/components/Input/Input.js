import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import styles from './Input.style';

const Input = ({label, placeHolder, onChangeText}) => {
    return(
        <SafeAreaView style={styles.container} >
            <Text style={styles.label} > {label} </Text>
            <View style={styles.inputContainer} >
                <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
            </View>
        </SafeAreaView>
    )
}

export default Input;