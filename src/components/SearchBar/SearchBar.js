import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './SearchBar.style';

function SearchBar({onSearch}) {
  return (
    <View style={styles.container}>
        <View style={styles.inner_container}>
            <TextInput style={styles.text} placeholder='Kelime Ara..' onChangeText={onSearch} />
        </View>
    </View>
  )
}

export default SearchBar