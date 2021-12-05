import { StyleSheet } from "react-native";
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    postContainer:{
        flex: 1,
    },
    imagePost:{
        width: '100%',
        height: 300
    },
    postInformation:{
        //height: 200,
        paddingLeft:10,
        paddingRight: 10
    }, 
    title:{
        fontSize: 23
    },
    infoPost:{
        flex: 1,
        
    },
    infoPostRow:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",        
    },
    textInfo:{
        fontSize: 15
    },
    delete: {
        backgroundColor: theme.colors.primary,
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textDelete:{
        color: '#fff',
        textAlign: 'center',
    }
})