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

    playBtn: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "#333",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 15
    },

    titleView: {
      width: "100%",
      justifyContent: "space-between",
    },

    info: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    music: {
      fontFamily: 'Quicksand_700Bold',
      fontSize: 32,
      lineHeight: 32,
      color: "#fff",
    },

    artist: {
      color: "#d0d0d0",
      fontFamily: 'Quicksand_400Regular',
      fontSize: 18
    },

    rating: {
      fontFamily: "Bungee_400Regular",
      fontSize: 24,
      lineHeight: 24,
      color: "#fff",
    },

    duration: {
      fontSize: 18,
      fontFamily: 'Quicksand_400Regular',
      color: "#fff",
    },

    descView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start"
    },

    descTitle: {
      marginTop: 30,
      color: "#fff",
      fontFamily: 'Quicksand_700Bold',
      lineHeight: 18,
      fontSize: 18
    },

    desc: {
      color: "#d0d0d0",
      fontFamily: 'Quicksand_400Regular',
      marginBottom: 10
    }
});

export default styles;