import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    post: {
        //height: 440,
        // backgroundColor: 'pink',
        // backgroundColor: theme.colors.secondary90,
        marginBottom: 10,
        //borderRadius: 10,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPost: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        

        // backgroundColor: 'gray',
        // marginLeft: 10,
        // marginRight: 10,     
        //width: '100%'
    },
    name:{
        //marginLeft: 3,
        //marginTop: 15,
        fontSize: 15,
    },
    user:{
        flexDirection: 'row',
    },
    bookImageContainer: {
        // width: '100%',
        flex: 1,
        //marginLeft: '8%',
        alignItems: 'center',
        
    },
    imagePost:{
        width: '100%',
        // height: '100%',
        height: 300, 
        // width: 300,
        borderRadius: 2,
    },
    bookName:{
        //marginLeft: '8%',
        alignSelf: 'flex-start',
        fontSize: 15,
        paddingLeft: 10,
        //fontWeight: 'bold'
    },
    bottomPost: {
        //width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 20,
        //marginLeft: '8%',
        //backgroundColor: "red"
    }

})