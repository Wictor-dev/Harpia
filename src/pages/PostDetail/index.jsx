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
            const {data} = await api.get(`postagem/${route.params}`)

            setPost(data)
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
    
    const verificarIgualdade = () => user._id === post.idUsuario;
    async function deletarPost(){
        try{
            await api.delete(`postagem/deletar/${route.params}`)

            navigation.navigate('home')
        } catch(e){
            console.log(e)
        }

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style= {styles.postContainer}>
                <View>
                    <Image style={styles.imagePost} source={{uri: image?.url}} />
                </View>
                <View style={styles.postInformation}>
                    {post.categoria == 'venda' ? 
                        <View style={styles.venda}>
                            <Text style={styles.title}>R$ {post.valor}</Text>
                            <LineBottom />
                        </View>
                        :
                        <></>
                    }

                    <View>
                        <Text style={styles.title}>Título: {post.titulo}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.textInfo}>
                            Descrição: {post.descricao}        
                        </Text>
                    </View>

                    <View style={styles.infoPost}>
                        <View style={styles.infoPostRow}>
                            {verificarIgualdade ? 
                                <Text style={styles.textInfo} >Por: {user.nome} </Text>
                                :
                                async () => {
                                    const {data} = await api.get(`usuario/${post.idUsuario}`)

                                    return (
                                        <Text style={styles.textInfo} >Por: {data.nome} </Text>
                                    )
                                }
                            }
                            <Text style={styles.textInfo} >Ano: 2005</Text>
                        </View>
                        <View style={styles.infoPostRow}>
                            <Text style={styles.textInfo}>Valor: R$ 15,00</Text>
                            <Text style={styles.textInfo}>Período: 1 semana</Text>
                        </View>
                    </View>
                    <LineBottom />
                </View>
                <View>
                    {verificarIgualdade
                        ? 
                        <TouchableOpacity onPress={deletarPost} style={styles.delete}>
                            <Text style={styles.textDelete}>Deletar</Text>
                        </TouchableOpacity>
                        :
                        <></>
                    
                    } 
                    
                </View>
            </View>
        </ScrollView>
    )

    
}

