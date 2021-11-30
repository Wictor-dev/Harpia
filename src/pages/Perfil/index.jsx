import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';

import { styles } from './style';
import { Ranking } from '../../components/Ranking';
import Post from '../../components/Post';
import { useAuth } from '../../contexts/auth';
import { usePost } from '../../contexts/postsContext';
import { useNavigation } from '@react-navigation/core';


export function Perfil({route}){
    const navigationReact = useNavigation()
    const user = route.params;
    const {posts} = usePost();

    function handlePostDetail(){
        navigationReact.navigate('PostDetail')
    }


    return (
        <ScrollView  showsVerticalScrollIndicator={false} >
            <View style={styles.infoUser}>
                <Image style={styles.avatar} source={{uri: "https://www.github.com/Wictor-dev.png" }} />
                {/* <Avatar uri="https://www.github.com/EzequielCosta.png" width={100} height={100} /> */}
                <View style={styles.ranking}>
                    <Ranking/>
                    <Text style={styles.textRaking}>(27)</Text>
                </View>   
                <Text style={styles.userName}> {user.nome} </Text>

                <View style={styles.reclamationsContainer}>
                    <Text style={styles.reclamations}>Sem reclamações</Text>
                </View>
            </View>
            <View style={styles.infoUserOther}>
                <Text>Empréstimos</Text>
                <Text>Doações</Text>
                <Text>Trocas</Text>
                <Text>Vendas</Text>
            </View>
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
            </View>
            <View style={styles.infoUserOther}>
                <Text>Moradia</Text>
                <Text>{user.bairro} - {user.cidade}/PI</Text>
            </View>
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
            </View>
            
            <View style={styles.infoUserOther}>
                <Text>Genero Literário</Text>
                <Text>Ação / Terror</Text>
            </View>

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
            </View>
            <View style={styles.posts}>
                <View style={styles.titlePostsContainer}>
                    <Text style={styles.titlePosts}>Posts</Text>
                </View>
                <View style={styles.postsContainer}>
                <FlatList 
                    style={styles.postsContainer}
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={post => post?._id}
                    renderItem={({item})=>{
                        return (
                            (item?.idUsuario == user._id) ? (<Post userId={item?.idUsuario} categoria={item?.categoria} titulo={item?.titulo} descricao={item?.descricao} postId = {item?._id} />) : (<></>)
                        )}}
                />
                </View>
            </View>
        </ScrollView>
    )
    
}