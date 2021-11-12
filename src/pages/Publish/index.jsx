import React, {useState, useEffect} from "react";
import { View, TextInput, Text, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./styles";
import { TextField } from '../../components/TextField';
import { ScrollView } from "react-native-gesture-handler";

import {api} from '../../services/api.js'
export function Publish(){
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
    const fetchApi = async () => {
        const article = {
            titulo: title,
            descricao: description,
            categoria: selectedLanguage,
            idLivro: '6171ad196164736e856ac344'
        }
        try{
            await api.post('postagens/criar', article)
        }
        catch(error){
            console.log(error)
        } 
    }

    const itemPicker = () => {
        if (selectedLanguage == 'venda'){
            return (
                <TextField 
                    label={'Valor'}
                    placeholder={'Digite o valor'}
                />
            )
        }
        else if (selectedLanguage === 'troca') {
            return (
                <TextField 
                label={'Itens de interesse'}
                placeholder={'Digite os itens que você quer...'}
                />
            )
        }
        else if (selectedLanguage==='emprestimo'){
            return (
                <>
                    <TextField 
                        label={'Valor'}
                        placeholder={'Digite o valor'}
                    />
                    <TextField 
                        label={'Data de devolução'}
                        placeholder={'Digite a data de devolução...'}
                    />
                </>
            )
        }
    }

    const extraFields = itemPicker()
    return (
        <ScrollView  style={styles.publishContainer} contentContainerStyle={{paddingBottom: 10}} showsVerticalScrollIndicator={false}>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Título</Text>
                <TextInput 
                    onChangeText={(title) => setTitle(title)}   
                    style={styles.input}
                    placeholder="Digite o título"
                    defaultValue={title}
                    />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput 
                    onChangeText={(desc) => setDescription(desc)}   
                    style={styles.input}
                    placeholder="Digite a sinopse"
                    defaultValue={description}
                    />
            </View>

            <Text style={styles.categoryTitle}>Categoria</Text>
            <View style={styles.category}>
                <Picker  
                    itemStyle={{backgroundColor:'#000'}}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Doar" value="doar" />
                    <Picker.Item label="Vender" value="venda" />
                    <Picker.Item label="Trocar" value="troca" />
                    <Picker.Item label="Emprestar" value="emprestimo" />
                </Picker>
            </View>
            {extraFields}
            <View style={styles.image}>
                <Text>Escolher Imagem</Text>
            </View>
            
            <Button 
                onPress={fetchApi}
                title={"Continuar"}
            />
        </ScrollView>
    )

    
}

