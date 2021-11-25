import React,{ useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import Filter from '../../components/Filter';

import { styles } from './style';
import { usePost } from '../../contexts/postsContext';
export function Home(){
    const navigation = useNavigation();

    const {posts} = usePost();

    function handlePostDetail(){
        navigation.navigate('PostDetail')
    }

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
                    keyExtractor={post => post?._id}
                    renderItem={({item})=>{
                        return (
                            <Post userId={item?.idUsuario} titulo={item?.titulo} descricao={item?.descricao} handlePostDetail={handlePostDetail} />
                        )}}
                />
        </View>
    )
}