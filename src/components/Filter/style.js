import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    filter:{
        flexDirection: 'row',
        justifyContent: 'space-between',


        
    },
    localization:{
        alignSelf: 'flex-start'
    },
    category:{
        
    },
    title:{
        color: '#000',
        fontSize: 15
    },
    pickerItem:{
        marginBottom: 100,
        borderColor: 'red',
        borderWidth: 1
    },
    invisible:{
        display: 'none',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // margin: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        width: '80%',
        height: 250,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
          marginTop: 15,
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})