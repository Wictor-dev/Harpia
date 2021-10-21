import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';

import { styles } from './style';
import { Ranking } from '../../components/Ranking';
import Post from '../../components/Post';


export function Perfil(){
    return (
        <ScrollView  showsVerticalScrollIndicator={false} >
            <View style={styles.infoUser}>
                <Image style={styles.avatar} source={{uri: "https://www.github.com/EzequielCosta.png" }} />
                {/* <Avatar uri="https://www.github.com/EzequielCosta.png" width={100} height={100} /> */}
                <View style={styles.ranking}>
                    <Ranking/>
                    <Text style={styles.textRaking}>(27)</Text>
                </View>   
                <Text style={styles.userName} >Ezequiel Costa</Text>

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
            <View style={styles.dividerOther}>
                <View style={styles.divider} />
            </View>
            <View style={styles.infoUserOther}>
                <Text>Moradia</Text>
                <Text>Mocambinho - Teresina-PI</Text>
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
                    <Post />
                    <Post />
                </View>
            </View>
        </ScrollView>
    )
    
}