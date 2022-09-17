import React, { useState } from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import WordCard from '../../components/WordCard';
import Words_data from '../../words.json';
import styles from './ListingWordsPage.style';
import SearchBar from '../../components/SearchBar';

const ListingWordsPage = () => {

    const [list, setList] = useState(Words_data);
    const renderWords = ({item}) => <WordCard words={item} />

    const handleSearch = text => {    // kelime aramak için kulladnığımız fonksiyon.
        const filteredList = Words_data.filter(word => {
            const searchedText = text.toLowerCase();
            const currentTitle = word.firstWord.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        })

        setList(filteredList);
    } 

    return(
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={list}
                renderItem={renderWords}
            />
        </SafeAreaView>
    );
}

export default ListingWordsPage;