import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Filter(){
    return(
        <View style={styles.filter}>
            <TouchableOpacity style = {styles.localization}>
                <Text>Teresina - PI</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.category}>
                <Text>Categoria: ALL</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    filter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})