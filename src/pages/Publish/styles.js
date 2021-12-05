import { StyleSheet } from "react-native";
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    publishContainer: {
        flex: 1,
        paddingBottom: 100
        // width: '100%',
        // height: '100%'
    },
    categoryTitle:{
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#fff'
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
    },
    formContainer:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    input: {
        width: '80%',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textArea:{
        width: '80%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textAreaInput:{
        width: '80%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: 10
    },
    label:{
        fontSize: 20,
        color: '#fff'
    },
    titleField:{
        color: '#fff'
    },
    submit:{
        backgroundColor: theme.colors.secondary50,
        borderRadius: 10,
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,
        height: 30,
        justifyContent: 'center'
    },
    textSubmit: {
        textAlign: 'center'
    }

})