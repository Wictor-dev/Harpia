import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export function Background({children}){
    const { secondary100, secondary80 } = theme.colors;

    return (
        <LinearGradient 
            style={styles.container}
            colors={[secondary100, secondary80]}
        >
            {children}
        </LinearGradient>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
