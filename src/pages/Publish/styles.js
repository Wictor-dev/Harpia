import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    publishContainer: {
        backgroundColor: '#069563',
        width: '100%',
        height: '100%'
    },
    formContainer:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    label:{
        fontSize: 20
    },
    input: {
        width: '80%',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5
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
    textArea:{
        width: '80%',
        height: 100,
        backgroundColor: '#fff',
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
    }

})