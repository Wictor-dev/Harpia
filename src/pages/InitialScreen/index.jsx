import React from 'react';
import {Text, View, Image, Button, TouchableHighlight, Pressable} from 'react-native';

import {styles} from './styles';
import BookImg from '../../assets/BookLogin.png'
import { useNavigation } from '@react-navigation/core';
export function InitialScreen(){
    const navigation = useNavigation();
    
    const handleSubmit = () => {
        navigation.navigate('SignIn')
    }
    return (
        <View style={styles.container}>
            <Image source={BookImg} style={styles.img} resizeMode='stretch' />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Compartilhe Experiências</Text>
                <Text style={styles.subtitle}>Com pessoas próximas a você</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable style={[styles.alternativeLogin, {width: '100%'}]} onPress={handleSubmit} >
                            <Text style={styles.alternativeText}> Faça Login </Text>
                </Pressable>
                {/* <TouchableHighlight style={[styles.alternativeLogin, {width: '100%'}]} underlayColor={'gray'}>
                            <Text style={styles.alternativeText}> Faça Login </Text>
                </TouchableHighlight> */}

                <View style={styles.alternativeButtonsSubmit}>
                    <Text style={styles.alternativeSubtitle}>Ou entre com</Text>
                    <View style={styles.buttonsAlternative}>
                        <Pressable style={styles.alternativeLogin}>
                            <Text style={styles.alternativeText}> Face</Text>
                        </Pressable>
                        <Pressable style={styles.alternativeLogin}>
                            <Text style={styles.alternativeText}> Insta</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </View>
    )
}