import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

import CancionText from '../CancionText';

import styles from './styles';

function Header() {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={handleGoBack}
      >
        <MaterialIcons 
          name="arrow-back"
          size={24}
        />
      </TouchableOpacity>

      <CancionText 
        primary="black"
        secondary="white"
        size={24}
      />  
    </View>
  );
}

export default Header;