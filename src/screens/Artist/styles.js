import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 30
    },

    image: {
      width: 300,
      height: 300,
      borderRadius: 8 
    },

    artist: {
      marginVertical: 20,
      fontFamily: 'Quicksand_700Bold',
      fontSize: 32,
      color: "#fff"
    },

    info: {
      width: "100%",
      color: "#fff",
      fontFamily: "Quicksand_400Regular"
    },

    titleView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start"
    },

    title: {
      marginVertical: 20,
      color: "#fff",
      fontFamily: 'Bungee_400Regular',
      lineHeight: 20,
      fontSize: 20
    }
});

export default styles;