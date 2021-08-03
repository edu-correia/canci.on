import { StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    wrappersList: {
      marginTop: 20,
      paddingHorizontal: 20,
      marginBottom: 10
    },

    title: {
      marginBottom: 10,
      color: "#fff",
      fontFamily: 'Bungee_400Regular',
      lineHeight: 20,
      fontSize: 20
    },

    searchBar: {
      width: "100%",
      height: 90,
      backgroundColor: "#FDDC5C",
      paddingHorizontal: 20,
      paddingTop: getStatusBarHeight(),
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: 'row'
    },
  
    input: {
      width: "80%",
      height: "80%",
      color: "#000",
      borderBottomWidth: 1,
      borderBottomColor: "#000"
    }
});

export default styles;