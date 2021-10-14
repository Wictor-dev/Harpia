import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import { styles } from "./style";

export default function Filter(){
    return(
        <View style={styles.filter}>
            <TouchableOpacity style = {styles.localization}>
                <Text style={styles.title} >Teresina - PI</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.category}>
                <Text style={styles.title} >Categoria: ALL</Text>
            </TouchableOpacity>
        </View>
    )
}