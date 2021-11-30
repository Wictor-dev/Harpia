import React, {useState, useEffect} from "react";
import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./styles";
import { TextField } from '../../../components/TextField';
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from '@react-navigation/native';
import {api} from '../../../services/api.js';
import { Background } from "../../../components/Background";

export function PublishLocal({route}){

    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const navigation = useNavigation();

    const article = route.params

    const fetchApi = async () => {
        article.bairro = bairro
        article.cidade = cidade
        article.estado = estado
        try{
            await api.post('postagens/criar', article)
            navigation.navigate('home')

        }
        catch(error){
            console.log(error)
        } 
    }

    return (
        <Background>
            <ScrollView  style={styles.publishContainer} contentContainerStyle={{paddingBottom: 10}} showsVerticalScrollIndicator={false}>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Bairro</Text>
                        <TextInput 
                            onChangeText={(bairro) => setBairro(bairro)}   
                            style={styles.input}
                            placeholder="Digite o bairro"
                            defaultValue={bairro}
                            />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Cidade</Text>
                        <TextInput 
                            onChangeText={(cidade) => setCidade(cidade)}   
                            style={styles.input}
                            placeholder="Digite a cidade"
                            defaultValue={cidade}
                            />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Estado</Text>
                        <TextInput 
                            onChangeText={(estado) => setEstado(estado)}   
                            style={styles.input}
                            placeholder="Digite o estado"
                            defaultValue={estado}
                            />
                </View>       

                <TouchableOpacity onPress={fetchApi} style={styles.submit}>
                    <Text style={styles.textSubmit}>Continuar</Text>
                </TouchableOpacity>
            </ScrollView>
        </Background>
        
    )

    
}

