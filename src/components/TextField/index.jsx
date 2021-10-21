import React from 'react';
import { View, Text, TextInput } from 'react-native';

import {styles} from './styles';

export function TextField({label, ...inputProps}){
    return (
        <View style={styles.formContainer}>
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    style={(label == 'Descrição' || label ==  'Sinopse') ? styles.textArea :styles.input}
                    {...inputProps}
                />
        </View>
    )
}