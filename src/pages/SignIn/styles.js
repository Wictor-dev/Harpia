import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signInContainer: {
        width: '90%',
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'center',
        paddingBottom: 100
    },
    titleContainer:{
        marginBottom: 20
    },
    title:{
        fontSize: 50,
        fontWeight: "bold",
        color: '#fff',
    },  
    fieldContainer:{
        marginBottom: 20,
    },
    input:{
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,  
        borderWidth: 1,   
        borderColor: '#ccc' 
    },
    buttonSubmit:{
        // marginTop: 20,
        backgroundColor: '#CAF0F8',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    }
    
})