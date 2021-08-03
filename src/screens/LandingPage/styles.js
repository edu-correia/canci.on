import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      
      cancion: {
        height: "20%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      btnView: {
        height: "20%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      image: { 
        width: "100%",
        height: "60%",
      },
      
      btn: {
        width: "80%",
        height: 64,
        backgroundColor: "#FDDC5C",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      
      btnText: {
        marginLeft: 24,
        fontSize: 18,
        fontFamily: 'Quicksand_400Regular'
      }
});

export default styles;