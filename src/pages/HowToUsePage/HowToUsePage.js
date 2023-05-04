import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './HowToUsePage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HowToUsePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Icon name="head-question" size={125} color="orange" />
        <Text style={styles.logo_title}>Nasıl Kullanırım?</Text>
      </View>
      <View style={styles.question_container}>
        <View style={styles.question_inner_container}>
          <View
            style={styles.question_title_container}>
            <Text style={styles.question_title}>Kelime Ekle?</Text>
          </View>
          <View style={styles.question_describe_container}>
            <Text style={styles.question_describe}>
              {' '}
              Kelime Ekleme kısmında sözlüğünüze eklemek istediğiniz İngilizce
              kelimeyi ve onun Türkçe karşılığını yazarak kategori kısmı
              seçtikten sonra sözlüğe ekleyebilirsiniz.{' '}
            </Text>
          </View>
        </View>
        <View style={styles.question_inner_container}>
          <View
            style={styles.question_title_container}>
            <Text style={styles.question_title}>Listen?</Text>
          </View>
          <View style={styles.question_describe_container}>
            <Text style={styles.question_describe}>
              {' '}
              Sözlüğünüze eklediğiniz kelimeleri bu kısımda görebileceksiniz.
            Kelimeleri silebilecek ve arama kısmı ile de hızlı bir ulaşım
            sağlayabileceksiniz.{' '}
            </Text>
          </View>
        </View>
        <View style={styles.question_inner_container}>
          <View
            style={styles.question_title_container}>
            <Text style={styles.question_title}>Kendini Dene?</Text>
          </View>
          <View style={styles.question_describe_container}>
            <Text style={styles.question_describe}>
              {' '}
              Bu kısımda ise sözlüğünüzdeki kelimelerden karşınıza rastgele
            getirip kendinizi deneyebilirsiniz.{' '}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HowToUsePage;
