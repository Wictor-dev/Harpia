import React from 'react';
import {StyleSheet, View} from 'react-native';

export function LineBottom(){
    return (
        <View style={styles.lineContainer}>
            <View style={styles.line} />
        </View>
    )
}

export const styles = StyleSheet.create({
    lineContainer:{
        alignItems: 'center',
        marginBottom: 10
    },
    line:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        elevation: 1
    },
})