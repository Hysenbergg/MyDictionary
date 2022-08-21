import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WordTestPage = () => {
    return(
        <View style={styles.container}>
            <Text> WordTestPage </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default WordTestPage;