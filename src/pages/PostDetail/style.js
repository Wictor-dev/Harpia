import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    imagePost:{
        width: '100%',
        height: 300
    },
    description:{
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft:10,
        //textAlign: 'justify'
    },
    dividerContainer:{
        alignItems: 'center'
    },
    divider:{
        borderBottomWidth: 1,
        width: '70%',
        marginTop: 10,
        marginBottom: 10
        
        
    },
    infoPost:{
        flex: 1,
        
    },
    infoPostRow:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10
    },
    textInfo:{
        fontSize: 13
    }
})