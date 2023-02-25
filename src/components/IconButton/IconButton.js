import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const IconButton = ({icon, buttonTitle, onPress}) => (
  <View style={{ alignItems: 'center'}} >
    <Button
      icon={icon}
      mode="elevated"
      buttonColor="orange"
      textColor="white"
      onPress={onPress}>
      {buttonTitle}
    </Button>
  </View>
);

export default IconButton;
