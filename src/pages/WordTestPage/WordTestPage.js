import React, {useState} from 'react';
import {View, Text } from 'react-native';
import styles from './WordTestPage.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Words_data from '../../words.json';

const WordTestPage = () => {

    const [list, setList] = useState(Words_data);
    const [karsiligi, setKarsiligi] = useState('');

    const turkceKelimeler = [];
    const ingilizceKelimeler = [];
    list.forEach(item => {
        ingilizceKelimeler.push(item.firstWord);
        turkceKelimeler.push(item.secondWord);
    });

    const rastgeleGetir = () => {
        console.log("---------------")
        console.log("ingilizce Kelimeler: " + ingilizceKelimeler);
        console.log("Turkce Kelimeler: " + turkceKelimeler); 
        const randomWord = Math.floor(Math.random() * ingilizceKelimeler.length );
        console.log("Random word: " + ingilizceKelimeler[randomWord]);
    }

    const dogruMu = () => {
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title} > İngilizce Kelime </Text>
            <View style={styles.word_container} >
                <Text style={styles.word} > Kelime </Text>
            </View>
            <Input label="Türkçe Karşılığı" placeHolder="Türkçe Karşılığı" onChangeText={setKarsiligi} />
            <View style={styles.buton_container} >
                <Button text="Rastgele" onPress={rastgeleGetir} />
                <Button text="Doğru mu?" onPress={dogruMu} />
            </View>
        </View>
    );
}

export default WordTestPage;