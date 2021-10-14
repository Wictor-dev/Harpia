import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    post: {
        height: 400,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10
    },
    userPost: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#effa',
        
    },
    perfil: {
        
        //marginLeft: 5,
        //marginBottom: 5,
        // width: 60,
        // height: 60,
        // backgroundColor: '#ccc',
        // borderRadius: 30,
        // margin: 15
    },
    user:{
        flexDirection: 'row',
    },
    bookImageContainer: {
        backgroundColor: '#ccc',
        width: '90%',
        height: '60%',
        margin: '5%'
    },
    bookName:{
        marginLeft: 20,
        fontSize: 15
    },
    name:{
        marginLeft: 3
    },
    imagePost:{
        width: '100%',
        height: '100%',
        
    }
})