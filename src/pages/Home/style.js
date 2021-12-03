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
        width: '60%',
        marginTop: '15%',
        marginLeft: '20%',
        marginRight: '20%',
        
        // margin: '5% 20% 0 20%', se fizer nessa maneira o Expo fecha
    }
})