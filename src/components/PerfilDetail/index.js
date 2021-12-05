import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';

import { styles } from './style';
import { Ranking } from '../../components/Ranking';
import Post from '../../components/Post';
import { useAuth } from '../../contexts/auth';
import { usePost } from '../../contexts/postsContext';
import { useNavigation } from '@react-navigation/core';

import { api } from '../../services/api';


export function PerfilDetail({route}){
    const navigationReact = useNavigation()
    const user = route.params;
    const {posts} = usePost();

    const [imgUser, setImgUser] = useState('https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png');

    const getImgUser = async () => {
        try {
            const {data} = await api.get(`/usuario/${user._id}/imagemPerfil`);
            if (data){
                setImgUser(data.url);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    getImgUser();

    
    
    function handlePostDetail(){
        navigationReact.navigate('PostDetail')
    }


    return (

        <View >
            <View style={styles.infoUser}>
                <Image style={styles.avatar} source={{uri: imgUser }} />
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
        </View>
        
       
    )
    
}