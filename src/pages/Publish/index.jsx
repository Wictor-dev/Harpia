import React, {useState, useEffect, useCallback, useRef} from "react";
import { View, TextInput, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./styles";

import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';
import { Background } from "../../components/Background";
import { Fields } from "../../components/Fields";

import * as ImagePicker from 'expo-image-picker';
import { useExtraField } from "../../contexts/ExtraFields";

import { api } from "../../services/api";

import axios from 'axios';

export function Publish(){
    const { user } = useAuth()
    const {valor, handleValor} = useExtraField()
    const [selectedCategory, setSelectedCategory] = useState('doar');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    

    const [image, setImage] = useState(null);

    const [hasLocationPermission, setHasLocationPermission] = useState(false);

    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [codigoCidade, setCodigoCidade] = useState("");
    const [enderecoLabel, setEnderecoLabel] = useState("");
    const [cep, setCEP] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState("");

    const [color, setColor] = useState('#fff');
    

    const navigation = useNavigation();
    
    const spanAlert = () => {
        Alert.alert('Inválido','Preencha todos os dados', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {text: 'OK', onPress: () => console.log('Ok Pressed')},
        ]);
    }

    const submit = async () => {
        if (title && selectedCategory && description && image){
            const filename = image.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;
            const imagem = new FormData();       
            imagem.append('file', { uri: image, name: filename, type }) 
            imagem.append('titulo', title)
            imagem.append('descricao', description)
            imagem.append('categoria', selectedCategory)
            imagem.append('idUsuario', user?._id)
            imagem.append('logradouro', logradouro);
            imagem.append('bairro', bairro);
            imagem.append('cidade', cidade);
            imagem.append('codigoCidade', codigoCidade);
            imagem.append('uf', uf);
            imagem.append('cep', cep);

            if (selectedCategory === 'venda' || selectedCategory === 'emprestimo'){
                imagem.append('valor', Number(valor))
            }

            try{
                await api.post('postagem/criar', imagem, {
                    headers:{
                        "Accept": "application/json",
                        "content-type":"multipart/form-data"
                    }
                })
                navigation.navigate('home')
    
            }
            catch(error){
                console.log(error)
            } 
            
            //navigation.navigate('publishLocal', imagem)
        }else {
            console.log('Dados faltando')
        }

    }

    // async function checkIfLocationEnabled () {
        
    //     try {
    //         const {status} = await Location.requestForegroundPermissionsAsync();
    //         if (status === "granted"){
    //             setHasLocationPermission(true)
    //             console.log(hasLocationPermission)
    //         }
            
    //     } catch (error) {
    //         console.log(error)    
    //         alert('A Permissão para acessar a localização foi negada');
    //     }
        
    // };

    // const CheckIfLocationEnabled = async () => {
        
    //     try {
    //         await Location.requestForegroundPermissionsAsync();
    //         const location2 = await Location.getCurrentPositionAsync({});
    //         setLocation(location2);
    //         console.log(location)
            
    //     } catch (error) {
    //         console.log(error)    
    //         alert('A Permissão para acessar a localização foi negada');
    //     }
        
    // };

       
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
          //CheckIfLocationEnabled();
          //getAndressByLocalization();
        })();
      }, []);
    
    const getEndereco = async () => {
        try {

            if (cep.length !== 8){
                setEnderecoLabel("O campo CEP precisa ter 8 dígitos")
                setColor("#ff0000")
                return;    
            }
            
            const endereco = await axios(
                {
                    method : "get",
                    url: `https://viacep.com.br/ws/${cep}/json/`,
                    responseType: "json"
                }
            );
            if (endereco.data.hasOwnProperty('error')){
                setEnderecoLabel("Endereço inválido")
                setColor("#ff0000")
                return;    
            }

            const {logradouro, bairro, ibge : codigoCidade, uf, localidade:cidade} = endereco.data;
            setLogradouro(logradouro);
            setBairro(bairro);
            setCodigoCidade(codigoCidade);
            setUf(uf);
            setCidade(cidade);
            setColor("#fff");
            setEnderecoLabel(`${logradouro}, ${bairro}`);

        } catch (error) {
            console.log(error)  
        }  
    }
    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
        
        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri)
        }
        
    };
   
    return (
        <Background>
            <ScrollView  style={styles.publishContainer} contentContainerStyle={{paddingBottom: 10}} showsVerticalScrollIndicator={false}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Título</Text>
                        <TextInput 
                            onChangeText={(title) => setTitle(title)}   
                            // onChange={handleValor}
                            style={styles.input}
                            placeholder="Digite o título"
                            defaultValue={title}
                            
                            />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Descrição</Text>
                        <TextInput 
                            multiline={true}
                            numberOfLines={4}
                            underlineColorAndroid="transparent"
                            onChangeText={(desc) => setDescription(desc)}   
                            style={styles.textAreaInput}
                            placeholder="Digite a sinopse"
                            defaultValue={description}
                            />
                </View>

                <Text style={styles.categoryTitle}>Categoria</Text>
                <View style={styles.category}>
                    <Picker  
                            itemStyle={{backgroundColor:'#000'}}
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedCategory(itemValue)
                            }>
                            <Picker.Item label="Doar" value="doar" />
                            <Picker.Item label="Vender" value="venda" />
                            <Picker.Item label="Trocar" value="troca" />
                            <Picker.Item label="Emprestar" value="emprestimo" />
                    </Picker>
                </View>
                <Fields categoria={selectedCategory} />
                <View style={styles.formContainer}>
                    <Text style={styles.label}>CEP</Text>
                        <TextInput 
                            onChangeText={(cep) => setCEP(cep)} 
                            keyboardType='numeric'
                            maxLength={8}
                            onBlur={getEndereco}  
                            // onChange={handleValor}
                            style={styles.input}
                            defaultValue={cep}
                            
                            />
                </View>
                <View style={styles.formContainer}>
                    <Text style={{fontSize:15, color: color}}>{enderecoLabel}</Text>
                </View>
                
                <View style={styles.image}>
                    {image ? <Image source={{ uri: image }} style={{ width: 313, height: 198, borderRadius: 5 }} /> : 
                    <TouchableOpacity onPress={pickImage}>
                        <Text>Escolher Imagem</Text>
                    </TouchableOpacity>}
                    {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                </View>
                {
                title !== '' &&
                description !== '' &&
                image !== null &&
                cep !== '' ? 
                (<TouchableOpacity onPress={submit} style={styles.submit}>
                    <Text style={styles.textSubmit}>Continuar</Text>
                </TouchableOpacity>)
                :
                (<TouchableOpacity onPress={spanAlert} style={styles.submit}>
                    <Text style={styles.textSubmit}>Continuar</Text>
                </TouchableOpacity>)
                }
                

            </ScrollView>
        </Background>
        
    )

    
}

