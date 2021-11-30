import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity,Image, TouchableHighlight } from 'react-native'
import {Avatar} from "../Avatar"

import {Ionicons} from "@expo/vector-icons";

import {api} from '../../services/api.js'
import { styles } from "./style"
import { useNavigation } from '@react-navigation/core';
import { IconPost } from '../IconPost';

export default function Post(props){
    const navigation = useNavigation();

    const [userPost, setUserPost] = useState({});
    const [like, setLike] = useState(false);
    useEffect(()=>{
        const fetchUser = async () => {
            const {data} = await api.get(`usuario/${props.userId}`);
    
            setUserPost(data);
        }

        fetchUser()
    },[])
    
    function handlePerfil(){
        navigation.navigate('perfil', userPost);
    }
    
    function handlePostDetail(){
        navigation.navigate('PostDetail', props.postId)
    }

    return (
        <View style={styles.post} /*onPress={props.onPress}*/>
            <View style={styles.userPost}>
                <TouchableOpacity style={styles.user} onPress={handlePerfil}>
                    <View style={styles.perfil}><Avatar  uri="https://www.github.com/Wictor-dev.png" width={55} height={55}/></View>
                    <Text style={styles.name}>{userPost.nome}</Text>
                </TouchableOpacity>
                <IconPost categoria= {props.categoria} />
            </View>
            <Text style={styles.bookName}>{props.titulo}</Text>
            {/* <Text style={[styles.bookName, {fontSize: 15}]}>{props.descricao}</Text> */}
            <TouchableOpacity style= {styles.bookImageContainer} onPress={handlePostDetail}  >
                
                <Image style= {styles.imagePost} source={{ uri: 'https://cf.shopee.com.br/file/c072b86d0c3184e4c9735cc13ce796fe'}} />
            </TouchableOpacity>
            <View style={styles.bottomPost}>
                <Text style={styles.postLocation}>Poty Velho - Teresina</Text>
                    {/* <FontAwesome5 name='heart' size={30} color="#000" style={styles.heartIcon} /> */}
                    {(like) ? (
                        <Ionicons name='heart' size={30} color="red" onPress={() => {setLike(false)}} />)
                    : (
                    <Ionicons name='heart-outline' size={30} color="#000" onPress={()=>{setLike(true)}} />
                    )}

            </View>
        </View>
    )
}