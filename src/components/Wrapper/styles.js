import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: 90,
      backgroundColor: "#151515",
      borderRadius: 8,
      padding: 10,
      flexDirection: 'row',
      marginBottom: 10
  },

  image: {
      width: 70,
      height: 70,
      borderRadius: 8,
      marginRight: 10
  },

  textBox: {
      height: 70,
      justifyContent: "space-evenly"
  },

  title: {
      color: "#fff",
      fontFamily: 'Quicksand_700Bold',
      lineHeight: 16,
      fontSize: 16
  },

  subtitle: {
    color: "#fff",
    fontFamily: 'Quicksand_400Regular',
    lineHeight: 16,
  }
});

export default styles;