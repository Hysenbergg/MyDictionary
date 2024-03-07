import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CategoryListPage.style';
import {colors} from '../../styles/colors';
import MainHeader from '../../components/Header/MainHeader';
import CategoryButton from '../../components/CategoryButton';

const realm = new Realm({path: 'WordDatabase.realm'});

const CategoryListPage = ({navigation}) => {
  var words = realm.objects('Word_Schema');
  const [uniqueCategories, setUniqueCategories] = useState([]);

  // Kullanıcının eklemiş olduğu kategori kadar buton oluşturma fonksiyonu.
  function filterCategories() {
    const objArray = words;

    const uniqueCategories = objArray.reduce((categories, obj) => {
      if (!categories.includes(obj.word_category)) {
        return [...categories, obj.word_category];
      }
      return categories;
    }, []);

    setUniqueCategories(uniqueCategories);
  }

  useEffect(() => {
    filterCategories();
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader title="Kategori Listesi" />
      <View style={styles.refresh_btn_container}>
        <TouchableOpacity
          style={[styles.refresh_icon_btn, styles.elevation]}
          onPress={filterCategories}>
          <Text style={styles.refresh_btn_title}>Yenile</Text>
          <Ionicons name="refresh" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      {uniqueCategories.length === 0 ? (
        <View style={styles.empty_container}>
          <Image
            style={{width: '100%', height: 450, resizeMode: 'contain'}}
            source={require('../../assets/empty-data.jpg')}
          />
          <Text style={styles.empty_title}>Henüz kelime eklenmemiş gözüküyor :(</Text>
        </View>
      ) : (
        <ScrollView style={{marginHorizontal: 20, marginVertical: 20}}>
          {uniqueCategories.map(category => (
            <CategoryButton
              key={category}
              title={category}
              onPress={() =>
                navigation.navigate('ListWords', {category: category})
              }
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default CategoryListPage;
