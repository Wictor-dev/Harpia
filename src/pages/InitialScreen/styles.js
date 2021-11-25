import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#87D0E1',
        height: '100%',
    },
    img:{
        width: '100%',
        height: 350
    },
    textContainer:{
        width: '90%',
        alignSelf: 'center',
    },
    title:{
        marginTop: 5,
        fontSize: 40,
        textAlign: 'center',
        color: '#fff'
    },
    subtitle:{
        marginTop: 5,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    buttonsContainer: {
        marginTop: 25,
        width: '70%',
        alignSelf: 'center',
    },
    alternativeButtonsSubmit: {
        marginTop: 50,
    },
    buttonsAlternative:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonLogin:{
        backgroundColor: '#ADE8F4',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textLogin:{
        color: '#0096C7',
        textAlign: 'center',
        fontSize: 20
    },
    alternativeSubtitle:{
        color: '#fff',
    },
    alternativeLogin:{
        width: '30%',
        backgroundColor: '#ADE8F4',
        borderRadius: 10,
        alignItems: 'center'
    },
})