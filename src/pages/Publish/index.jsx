import React, {useState} from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";
import { Picker } from '@react-native-picker/picker';

export function Publish(){
    const [selectedLanguage, setSelectedLanguage] = useState();

    const TextField = ({label, ...inputProps}) => (
            <View style={styles.formContainer}>
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    style={(label == 'Descrição') ? styles.textArea :styles.input}
                    {...inputProps}
                />
            </View>
        )
    return (
        <View style={styles.publishContainer}>
            <TextField 
                label={'Título'}
                placeholder={'Digite o título do livro...'}
            />
            <TextField 
                label={'Descrição'}
                placeholder={'Digite a descrição do livro...'}
            />
            {/* <TextField 
                label={'Categoria'}
                placeholder={'Selecione a categoria...'}
            /> */}
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

            
            <View style={styles.image}>
                <Text>Escolher Imagem</Text>
            </View>

        </View>
    )

    
}

