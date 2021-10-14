import React from 'react';
import {Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Post(){
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#00FA9A'}}
        >
            <Text>Aloo</Text>
        </ScrollView>
    )
    
}