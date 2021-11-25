import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import {styles} from './styles';
import BookImg from '../../assets/BookLogin.png';
import { useNavigation } from '@react-navigation/core';
import { Ionicons, Feather } from '@expo/vector-icons';

export function InitialScreen(){
    const navigation = useNavigation();
    
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Image source={BookImg} style={styles.img} resizeMode='stretch' />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Compartilhe Experiências</Text>
                <Text style={styles.subtitle}>Com pessoas próximas a você</Text>
            </View>
            <View style={styles.buttonsContainer}>

                <TouchableHighlight style={styles.buttonLogin} underlayColor={'#85b3bd'} onPress={handleSignIn} >
                            <Text style={styles.textLogin}> Faça Login </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonLogin, {marginTop: 10, backgroundColor: '#0077B6'}]} underlayColor={'#85b3bd'} onPress={handleSignUp} >
                            <Text style={[styles.textLogin, {color: '#ADE8F4'}]}> Criar conta </Text>
                </TouchableHighlight>
                
                <View style={styles.alternativeButtonsSubmit}>
                    <Text style={styles.alternativeSubtitle}>Ou entre com</Text>
                    <View style={styles.buttonsAlternative}>
                        <TouchableHighlight style={styles.alternativeLogin} underlayColor={'#85b3bd'} >
                            <Feather name='facebook' size={40} color={'#0096C7'} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.alternativeLogin} underlayColor={'#85b3bd'} >
                            <Ionicons name='logo-google'  size={40} color={'#0096C7'} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.alternativeLogin} underlayColor={'#85b3bd'} >

                            <Feather name='instagram' size={40} color={'#0096C7'} />
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        </View>
    )
}