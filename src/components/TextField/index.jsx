import React from 'react';
import { View, Text, TextInput } from 'react-native';

import {styles} from './styles';

export function TextField({label, setarValor, valor, ...inputProps}){
    return (
        <View style={styles.formContainer}>
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    
                    style={styles.input}
                    {...inputProps}
                    onChangeText={setarValor}
                    value={valor}
                />
        </View>
    )
}