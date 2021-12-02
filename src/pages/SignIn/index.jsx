import React, { useState } from 'react';
import {View, Button, Text, TextInput, ImageBackground, TouchableHighlight} from 'react-native';

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

    return(
        <ImageBackground source={require('../../assets/backgroundSignIn.png')} style={{width: '100%', height: '100%'}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}}>
            <View style={styles.signInContainer}>
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
                <TouchableHighlight underlayColor={'#ccc'} onPress={handleSignIn} style={styles.buttonSubmit}>
                    <Text style={styles.text}>Sign In</Text>
                </TouchableHighlight>
            </View>
            </ScrollView>
        </ImageBackground>
    )
}