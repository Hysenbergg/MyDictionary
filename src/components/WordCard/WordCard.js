import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import styles from './WordCard.style';

const WordCard = ({words}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.num_container} >
                <Text style={styles.indexnumber} > {words.id} </Text>
            </View>
            <View style={styles.inner_container} >
                <Text style={styles.first_text} > {words.firstWord} </Text>
                <Text style={styles.second_text} > {words.secondWord} </Text>
            </View>
        </SafeAreaView>
    )
}

export default WordCard;