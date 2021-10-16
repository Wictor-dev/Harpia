import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    infoUser:{
        width: '100%',
        height: 320,
        backgroundColor: '#80F4C8',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    avatar:{
        width: 200,
        height:200,
        borderRadius: 100
    },
    ranking:{
        marginTop:10,
        flexDirection: 'row',
    },
    textRaking:{
        textAlignVertical: 'center',
        marginLeft: 5
    },
    userName:{
        fontSize: 15,
        marginTop: 10
    },

    reclamationsContainer: {
        marginTop: 10,
    },
    reclamations:{
        color: "#0E3125",
    },
    infoUserOther:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 25,
        paddingLeft: 25,
    },
    dividerContainer:{
        alignItems: 'center'
    },
    divider:{
        borderBottomWidth: 1,
        width: '90%'
    },
    titlePostsContainer:{
        alignItems: 'center',
        paddingTop: 15,
    },
    titlePosts:{
        fontSize: 20
    },
    postsContainer: {
        width: '90%',
        margin: '5%',
    },

    infoUserTransations:{
        flexDirection: 'row',

    }
    
})