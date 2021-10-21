import React from 'react'
import { Text, View } from 'react-native'
import { TextField } from '../../components/TextField'
import { styles } from './styles'

export function Books(){
    return (
        <View style={styles.booksContainer}>
            <TextField 
                label={"Título"}
                placeholder={"Digite o título do livro..."}
            />
           
            <TextField 
                label={"Sinopse"}
                placeholder={"Digite a sinopse do livro..."}
            />
           
            <TextField 
                label={"Autor"}
                placeholder={"Digite o nome do autor..."}
            />
           
            <TextField 
                label={"Qualidade"}
                placeholder={"Digite o nome do autor..."}
            />
           
            <TextField 
                label={"Idade"}
                placeholder={"Digite o nome do autor..."}
            />
            <View style={styles.image}>
                <Text>Escolher Imagem</Text>
            </View>
           

        </View>
    )
}