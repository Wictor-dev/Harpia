import React, {useState, useEffect} from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./styles";

import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';
import { Background } from "../../components/Background";
import { Fields } from "../../components/Fields";

import * as ImagePicker from 'expo-image-picker';
import { useExtraField } from "../../contexts/ExtraFields";

export function Publish(){
    const { user } = useAuth()
    const {valor, handleValor} = useExtraField()
    const [selectedCategory, setSelectedCategory] = useState('doar');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [image, setImage] = useState(null);

    const navigation = useNavigation();
    
    const submit = () => {
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

            if (selectedCategory === 'venda' || selectedCategory === 'emprestimo'){
                imagem.append('valor', Number(valor))
            }
            
            navigation.navigate('publishLocal', imagem)
        }else {
            console.log('Dados faltando')
        }

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
                <View style={styles.image}>
                    {image ? <Image source={{ uri: image }} style={{ width: 313, height: 198, borderRadius: 5 }} /> : 
                    <TouchableOpacity onPress={pickImage}>
                        <Text>Escolher Imagem</Text>
                    </TouchableOpacity>}
                    {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                </View>

                <TouchableOpacity onPress={submit} style={styles.submit}>
                    <Text style={styles.textSubmit}>Continuar</Text>
                </TouchableOpacity>

            </ScrollView>
        </Background>
        
    )

    
}

