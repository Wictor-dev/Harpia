import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';

import { styles } from './style';
import { Ranking } from '../../components/Ranking';
import Post from '../../components/Post';
import { useAuth } from '../../contexts/auth';
import { usePost } from '../../contexts/postsContext';
import { useNavigation } from '@react-navigation/core';


import { PerfilDetail } from '../../components/PerfilDetail';


export function Perfil({route}){
    const navigationReact = useNavigation()
    const user = route.params;

    const {posts} = usePost();
    
    function handlePostDetail(){
        navigationReact.navigate('PostDetail')
    }

    

    return (

        <FlatList 
            ListHeaderComponent={() => (<PerfilDetail route = {route}/>)}
            showsVerticalScrollIndicator={false}
            data={posts}
            keyExtractor={post => post?._id}
            renderItem={({item})=>{
                return (
                    (item?.idUsuario == user._id && <Post 
                                                        userId={item?.idUsuario} 
                                                        categoria={item?.categoria} 
                                                        titulo={item?.titulo} 
                                                        descricao={item?.descricao} 
                                                        postId = {item?._id} 
                                                        logradouro = {item?.logradouro}
                                                        bairro = {item?.bairro} 
                                                    />)
            )}}
        />

    )
    
}