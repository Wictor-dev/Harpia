import React, {useState} from "react";
import { View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./styles";
import { TextField } from '../../components/TextField';

export function Publish(){
    const [selectedLanguage, setSelectedLanguage] = useState();


    const sale = (selectedLanguage === 'venda') ? (
            <TextField 
                label={'Valor'}
                placeholder={'Digite o valor'}
            />
    ) : (<></>)

    const trade = (selectedLanguage === 'troca') ? (
            <TextField 
                label={'Itens de interesse'}
                placeholder={'Digite os itens que você quer...'}
            />
    ) : (<></>)

    const emprestimo = (selectedLanguage === 'emprestimo') ? (
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
    ) : (<></>)

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
            {sale}
            {trade}
            {emprestimo}
            <View style={styles.image}>
                <Text>Escolher Imagem</Text>
            </View>

        </View>
    )

    
}

