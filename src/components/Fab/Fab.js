import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import { colors } from '../../styles/colors';

const Fab = () => (
  <View style={styles.container} >
    <FAB
      icon="plus"
      color={colors.primary}
      style={styles.fab}
      onPress={() => console.log('FAB Pressed')}
    />
  </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    },
    fab: {},
});

export default Fab;
