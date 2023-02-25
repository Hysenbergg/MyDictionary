import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';

const Fab = () => (
  <View style={styles.container} >
    <FAB
      icon="plus"
      color='orange'
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
