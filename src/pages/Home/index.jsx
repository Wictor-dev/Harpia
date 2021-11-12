import React,{ useState, useEffect } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
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

    useEffect(()=>{
        const fetchApi = async ()=>{
            const {data} = await api.get('postagens')
            setPosts(data)
        }
        fetchApi();
    }, [])
    
    const postsRender = posts.map(post => {
        return(
            <View key={post.id}>
                <Post titulo={post.titulo}  handlePostDetail={handlePostDetail} />

            </View>
        )
    })
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#154c79'}}
        >
            <View style={styles.filterContainer}>
                <Filter />
            </View>
            <View style={styles.postsContainer}>
                {postsRender}
            </View>
        </ScrollView>
    )
}