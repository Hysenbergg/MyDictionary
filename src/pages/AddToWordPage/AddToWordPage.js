import React, { useState } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AddToWordPage = ({navigation}) => {

    const [firstWord, setFirstWord] = useState("");
    const [secondWord, setSecondWord] = useState("");

    function addToWord(){
        if( !firstWord || !secondWord ){  // Herhangi bir input bos kalırsa.
            Alert.alert('MyDictionary', 'Kelime kutuları boş bırakılamaz!');
            return;
        }
        const words = {
            words: {
                firstWord: firstWord,
                secondWord: secondWord,
            }
        };
        navigation.navigate("ListingWordsPage", {words})        
    }

    return(
        <View style={styles.container}>
            <Input label="İlk Kelimeyi Yaz" placeHolder="İngilizce Kelimeyi Yaz" onChangeText={setFirstWord} />
            <Input label="İkinci Kelimeyi Yaz" placeHolder="Türkçe Kelimeyi Yaz" onChangeText={setSecondWord} />
            <Button text="Kelimeleri Kaydet" onPress={addToWord} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default AddToWordPage;