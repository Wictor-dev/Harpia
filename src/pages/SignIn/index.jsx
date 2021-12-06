import React, { useState } from 'react';
import {View, Button, Text, TextInput, ImageBackground, TouchableHighlight, Alert} from 'react-native';

import {styles} from './styles';

import {useAuth} from '../../contexts/auth';
import { ScrollView } from 'react-native';
// import backgroundSignIn from '../../assets/backgroundSignIn.png';

// const image = { uri: "https://reactjs.org/logo-og.png" };

export function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { signIn } = useAuth();
    function handleSignIn(){
        signIn(email, senha);
    }

    const spanAlert = () => {
        Alert.alert('Dados faltando','Preencha todos os dados', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {text: 'OK', onPress: () => console.log('Ok Pressed')},
        ]);
    }

    return(
        <ImageBackground source={require('../../assets/backgroundSignIn.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.signInContainer}>
                <View style={styles.titleContainer}> 
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        onChangeText={(email) => setEmail(email)}                  
                        placeholder="Email"
                        defaultValue={email}
                        style={styles.input}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        onChangeText={(senha) => setSenha(senha)}                         
                        placeholder="Senha"
                        defaultValue={senha}
                        style={styles.input}
                        secureTextEntry={true}
                        />
                </View>
                {/* <Button title={'Sign In'} onPress={handleSignIn} /> */}
                {email !== '' && senha !== '' ? 
                   ( <TouchableHighlight underlayColor={'#ccc'} onPress={handleSignIn} style={styles.buttonSubmit}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableHighlight>)
                    :
                    (
                    <TouchableHighlight underlayColor={'#ccc'} onPress={spanAlert} style={styles.buttonSubmit}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableHighlight>  
                    )
                }
            </View>
        </ImageBackground>
    )
}