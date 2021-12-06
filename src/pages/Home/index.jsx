import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import { LocalizationFilter } from '../../components/Filter/localization';
import { CategoryFilter } from '../../components/Filter/category';

import { styles } from './style';
import { usePost } from '../../contexts/postsContext';
import { useCategory } from '../../contexts/categoryFilter';
import { Background } from '../../components/Background';
import { LineBottom } from '../../components/LineBottom';

import { useIsFocused } from "@react-navigation/core";

import { api } from '../../services/api';


export function Home(){
    //const {posts} = usePost(); Será retirado, pois não sei outra forma de fazer uma chamada na api dinâmica, por esse contexto

    const { categoryFilter } = useCategory()

    const [posts, setPosts] = useState([]);
    const postsFiltered = posts.filter(post => post?.categoria === categoryFilter);
    const [loading, setLoading] = useState(false) 

    const isFocused = useIsFocused();

    const getPosts = async () =>{
        setLoading(true)
        try {
            const {data} = await api.get('/postagem/getAll')
            setPosts(data)
            setLoading(false)
        } catch(e){
            console.log("Erro: "+ e)
        }
        //setLoading(false)
    };


    useEffect(() =>{ 
        getPosts();
    },[isFocused])
    return (
        <View style={styles.homeContainer} >
            <View style={styles.filterContainer}>
                <LocalizationFilter />
                <CategoryFilter />
            </View>
            <View style={styles.postsContainer}>

                <FlatList 
                        onRefresh={getPosts}
                        refreshing={loading}
                        contentContainerStyle={{paddingBottom: 50}}
                        showsVerticalScrollIndicator={false}
                        //ItemSeparatorComponent={() => (<View style={{marginBottom: 10}} />)}
                        data={ categoryFilter === 'All' ? posts : postsFiltered }
                        keyExtractor={post => post?._id}
                        renderItem={({item})=>{
                            return (
                                <>
                                    <Post 
                                        userId={item?.idUsuario} 
                                        categoria={item?.categoria} 
                                        titulo={item?.titulo} 
                                        descricao={item?.descricao} 
                                        postId = {item?._id} 
                                        logradouro = {item?.logradouro} 
                                        bairro = {item?.bairro}   />
                                    <LineBottom />
                                </>
                                )}}
                />
            </View>

        </View>
    )
}