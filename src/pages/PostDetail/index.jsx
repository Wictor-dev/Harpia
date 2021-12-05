import React, {useEffect, useState} from "react";
import { View, Text,Image, ScrollView, TouchableOpacity } from "react-native";
import { api } from "../../services/api";

import { useNavigation } from '@react-navigation/native';

import { styles } from "./style";
import { useAuth } from "../../contexts/auth";
import { LineBottom } from "../../components/LineBottom";

export function PostDetail({route}){
    const {user} = useAuth();
    const navigation = useNavigation()
    const [post, setPost] = useState({});
    const [image, setImage] = useState({})
    const [userPost, setUserPost] = useState({});
    useEffect(()=> {
        async function getPost(){

            try {
                const {data} = await api.get(`postagem/${route.params}`)
                setPost(data)    

                const {data : dataUser} = await api.get(`usuario/${data.idUsuario}`)
                setUserPost(dataUser)

            } catch (error) {
                console.log(error)
            }
            
        }

        getPost()
    },[])

    useEffect(()=>{
        const fetchImage = async () => {
            try {
                const {data} = await api.get('postagem/imagem');
                
                const imageFinder = data.find(image => image.postagemId === route.params)

                setImage(imageFinder)
                
            } catch(e){
                console.log(e)
            }
        }

        fetchImage()
    },[])
    
    const verificarIgualdade = user._id === post.idUsuario;
    async function deletarPost(){
        try{
            await api.delete(`postagem/deletar/${route.params}`)

            navigation.navigate('home')
        } catch(e){
            console.log(e)
        }

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}} >
            <View style= {styles.postContainer}>
                <View>
                    <Image style={styles.imagePost} source={{uri: image?.url}} />
                </View>
                <View style={styles.postInformation}>
                    <View>
                        <Text style={styles.title}>Título: {post?.titulo}</Text>
                    </View>
                    {post.categoria == 'venda' &&
                        <View style={styles.venda}>
                            <Text style={styles.title}>R$ {post?.valor}</Text>
                            <LineBottom />
                        </View>                        
                    }

                    <View style={styles.description}>
                        <Text style={styles.textInfo}>
                            Descrição: {post?.descricao}        
                        </Text>
                    </View>

                    <View style={styles.infoPost}>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo}>Categoria: {post?.categoria}</Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo} >Por: {userPost?.nome} </Text>
                            <Text style={styles.textInfo} >Telefone: {userPost?.telefone} </Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            {post.categoria === 'emprestimo' &&  <Text style={styles.textInfo}>Período: 1 semana</Text>}                  
                        </View>
                        <LineBottom />
                        <View style={styles.infoPostRow}>
                            <Text style={styles.title}>Localização</Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo}>Endereço: {`${post.logradouro}, ${post.bairro}`}</Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo}>CEP: {`${post.cep}`}</Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo}>Localidade: {`${post.cidade}, ${post.uf}`}</Text>
                        </View>
                        </View>
                        <LineBottom />
                </View>

                <View>
                    {verificarIgualdade
                        &&
                        <TouchableOpacity onPress={deletarPost} style={styles.delete}>
                            <Text style={styles.textDelete}>Deletar</Text>
                        </TouchableOpacity>                        
                    } 
                    
                </View>
            </View>
        </ScrollView>
    )

    
}

