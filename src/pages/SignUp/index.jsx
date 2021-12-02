import React, {useState} from 'react';

import {Text, View, ImageBackground, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import {useAuth} from '../../contexts/auth';

import {styles} from './styles'

export function SignUp(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const { signUp } = useAuth();
    function handleSignUp(){
        const article = {
            nome,
            dataNascimento: dataNasc,
            telefone,
            email,
            senha,
            bairro: 'São Joaquim',
            cidade,
            estado
        }
        signUp(article);
    }
    return(
        <View>
            <ImageBackground source={require('../../assets/backgroundSignUp.png')} style={{width: '100%', height: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}} >
                    <View style={styles.signInContainer}>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                onChangeText={(nome) => setNome(nome)}                  
                                placeholder="Nome"
                                defaultValue={nome}
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.fieldContainer}>
                            <TextInput 
                                onChangeText={(nascimento) => setDataNasc(nascimento)}                  
                                placeholder="Data de Nascimento"
                                defaultValue={dataNasc}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                onChangeText={(telefone) => setTelefone(telefone)}                  
                                placeholder="Telefone"
                                defaultValue={telefone}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                onChangeText={(cidade) => setCidade(cidade)}                  
                                placeholder="Cidade"
                                defaultValue={cidade}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                onChangeText={(estado) => setEstado(estado)}                  
                                placeholder="Estado"
                                defaultValue={estado}
                                style={styles.input}
                            />
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
                        <TouchableHighlight underlayColor={'#ccc'} onPress={handleSignUp} style={styles.buttonSubmit}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>    
            </ImageBackground>
            
        </View>
    )
}