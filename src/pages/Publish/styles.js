import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    publishContainer: {
        backgroundColor: '#240046',
        width: '100%',
        height: '100%'
    },
    categoryTitle:{
        alignSelf: 'center',
        fontSize: 20
    },
    category:{
        width: '80%',
        height: 30,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    categoryItems:{
        borderRadius: 5
    },
    image:{
        width: '80%',
        height: 200,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    empty:{
        margin: 0,
        padding: 0,
    }

})