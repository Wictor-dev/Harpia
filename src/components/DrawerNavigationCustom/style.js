import { StyleSheet } from "react-native";
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        //backgroundColor: '#069563'
    },
    profile:{
        alignItems: "center",
        padding: 10,
        backgroundColor: theme.colors.secondary100
    },
    ranking:{
        marginTop: 10,
        marginBottom:10
    },
    buttonVerPerfil:{
        borderRadius: 10,
        backgroundColor: theme.colors.secondary60,
        padding: 5,
    }
});