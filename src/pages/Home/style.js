import {StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor: theme.colors.secondary100,
        height: '100%'
    },
    postsContainer: {
        width: '100%',
        margin: '5%',
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    filterContainer:{
        width: '70%',
        marginTop: '15%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})