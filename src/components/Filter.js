import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Filter(){
    return(
        <View style={styles.filter}>
            <Text>Teresina - PI</Text>
            <Text>Categoria: ALL</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    filter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})