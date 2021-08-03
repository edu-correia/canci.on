import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import CancionText from '../../components/CancionText';
import LpImage from '../../assets/lp-image.png';

import styles from './styles';

export default function LandingPage(){
  const navigation = useNavigation();

  function handleGoToHome(){
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.cancion}>
        <CancionText 
          primary="white"
          secondary="yellow"
          size={48}
        />
      </View>

      <Image 
        source={LpImage}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.btnView}>
        <TouchableOpacity 
          style={styles.btn}
          activeOpacity={0.8}
          onPress={handleGoToHome}
        >
            <MaterialIcons 
              name="music-note"
              color="#000"
              size={24}
            />
            <Text style={styles.btnText}>Pesquisar músicas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}