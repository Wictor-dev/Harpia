import React, {useState, useEffect} from 'react';

import {Text, View, ImageBackground, TextInput, TouchableHighlight, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useAuth} from '../../contexts/auth';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import {styles} from './styles'

export function SignUp(){
    const [avance, setAvance] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [image, setImage] = useState(null);
    const { signUp } = useAuth();

    function showNext(){
        setAvance(1)
    }

    function verificarForm(dados){
        if (avance===0){
            if (dados.nome !== '' && dados.email !== '' && dados.senha !== ''){
                return true;
            } 
            return false;
        } else {
            if (dados.dataNasc !== '' && dados.telefone !== ''){
                return true;
            } 
            return false;
        }
    }
    function handleSignUp(){
        const filename = image.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;
        const article = new FormData();   

        article.append("perfilImg", {uri: image, name: filename, type })
        article.append("nome", nome)
        article.append("email", email)
        article.append("senha", senha)

        signUp(article);
        // console.log(article)
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri)
        }
        
    };

    return(
        <View>
            <ImageBackground source={require('../../assets/backgroundSignUp.png')} style={{width: '100%', height: '100%'}}>
                {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}} > */}
                    <View style={styles.signInContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Cadastro</Text>
                        </View>
                        {avance === 0 ? (
                            <>
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
                            </>
                        ): (
                            <>
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
                                <View style={styles.image}>
                                    {image ? <Image source={{ uri: image }} style={{ width: 313, height: 198, borderRadius: 5 }} /> : 
                                    <TouchableOpacity onPress={pickImage}>
                                        <Feather name='image' size={150} color={'#000'} />
                                    </TouchableOpacity>}
                                </View>
                            </>
                        )}       
                        {avance === 0 ? (
                            <TouchableHighlight underlayColor={'#ccc'} onPress={showNext} style={styles.buttonSubmit} disabled={!verificarForm({nome, email, senha})}>
                                <Text style={styles.text}>Cadastrar</Text>                              
                            </TouchableHighlight>
                        ):(
                        <>
                            <TouchableHighlight underlayColor={'#ccc'} onPress={()=>{setAvance(0)}} style={styles.buttonSubmit} disabled={!verificarForm({nome, email, senha})}>
                                <Text style={styles.text}>Voltar</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#ccc'} onPress={handleSignUp} style={styles.buttonSubmit} disabled={!verificarForm({dataNasc, telefone})}>
                                <Text style={styles.text}>Cadastrar</Text>
                            </TouchableHighlight>
                        </>
                        )}    
                        
                    </View>
                {/* </ScrollView>     */}
            </ImageBackground>
            
        </View>
    )
}