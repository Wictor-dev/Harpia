import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    post: {
        height: 440,
        // backgroundColor: '#fff',
        // backgroundColor: theme.colors.secondary90,
        marginBottom: 10,
        borderRadius: 10
    },
    userPost: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        // marginLeft: 10,
        // marginRight: 10,     
        width: '100%'
    },
    name:{
        marginLeft: 3,
        marginTop: 15,
        fontSize: 15,
    },
    user:{
        flexDirection: 'row',
    },
    bookImageContainer: {
        width: '90%',
        marginLeft: '8%',
    },
    imagePost:{
        width: '100%',
        height: 300, 
        borderRadius: 10
    },
    bookName:{
        marginLeft: '8%',
        fontSize: 15,
    },
    bottomPost: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 20,
        marginLeft: '8%',
    }

})