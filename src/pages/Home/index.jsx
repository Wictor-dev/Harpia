import React,{ useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import Filter from '../../components/Filter';

import {api} from '../../services/api.js'
import { styles } from './style';

export function Home(){
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);
    
    function handlePostDetail(){
        navigation.navigate('PostDetail')
    }

    // Faz o consumo da API assim que a página é carregada
    useEffect(()=>{
        const fetchApi = async ()=>{
            const {data} = await api.get('postagens')
            setPosts(data)
        }
        fetchApi();
    }, [])
   
    return (
        <View 
            style={{backgroundColor: '#00B4D8'}}
        >
            <View style={styles.filterContainer}>
                <Filter />
            </View>
            <FlatList 
                    style={styles.postsContainer}
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={post => post.id}
                    renderItem={({item})=>{
                        
                        return (
                            <Post titulo={item?.titulo} handlePostDetail={handlePostDetail} />
                        )}}
                />
        </View>
    )
}