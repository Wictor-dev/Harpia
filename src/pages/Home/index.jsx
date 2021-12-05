import React,{ useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import Filter from '../../components/Filter';

import { styles } from './style';
import { usePost } from '../../contexts/postsContext';
import { Background } from '../../components/Background';
import { LineBottom } from '../../components/LineBottom';


import { api } from '../../services/api';


export function Home(){
    //const {posts} = usePost();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false) 

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
    },[])
    return (
        <View style={styles.homeContainer} >
            <View style={styles.filterContainer}>
                <Filter />
            </View>
            <View style={styles.postsContainer}>
                <FlatList 
                        onRefresh={getPosts}
                        refreshing={loading}
                        contentContainerStyle={{paddingBottom: 50}}
                        showsVerticalScrollIndicator={false}
                        //ItemSeparatorComponent={() => (<View style={{marginBottom: 10}} />)}
                        data={posts}
                        keyExtractor={post => post?._id}
                        renderItem={({item})=>{
                            return (
                                <>
                                    <Post userId={item?.idUsuario} categoria={item?.categoria} titulo={item?.titulo} descricao={item?.descricao} postId = {item?._id}  />
                                    <LineBottom />
                                </>
                                )}}
                />
            </View>
            
        </View>
    )
}