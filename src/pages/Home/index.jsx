import React,{ useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import Filter from '../../components/Filter';

import { styles } from './style';
import { usePost } from '../../contexts/postsContext';
import { Background } from '../../components/Background';
import { LineBottom } from '../../components/LineBottom';
export function Home(){
    const {posts} = usePost();

    return (
        <View style={styles.homeContainer} >
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
                            <>
                                <Post userId={item?.idUsuario} categoria={item?.categoria} titulo={item?.titulo} descricao={item?.descricao} postId = {item?._id}  />
                                <LineBottom />
                            </>
                            )}}
            />
        </View>
    )
}