import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';

import { Bungee_400Regular } from '@expo-google-fonts/bungee';
import { Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import LandingPage from './src/screens/LandingPage';
import Home from './src/screens/Home';
import Artist from './src/screens/Artist';
import Music from './src/screens/Music';

export default function App() {
  const { Navigator, Screen } = createStackNavigator();

  const [isFontsLoaded] = useFonts({
    Bungee_400Regular,
    Quicksand_400Regular,
    Quicksand_700Bold
  });

  if(!isFontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.app}>
      <StatusBar 
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

      <NavigationContainer>
        <Navigator
          headerMode="none"
          initialRouteName="LandingPage"
          screenOptions={{
              cardStyle: {
                  backgroundColor: "#222"
              }
          }}
        >
          <Screen 
            name="LandingPage"
            component={LandingPage}
          />
          
          <Screen 
            name="Home"
            component={Home}
          />

          <Screen 
            name="Artist"
            component={Artist}
          />

          <Screen 
            name="Music"
            component={Music}
            options={{
              animationEnabled: false
            }}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});