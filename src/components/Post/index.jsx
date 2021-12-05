import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity,Image, TouchableHighlight } from 'react-native'
import {Avatar} from "../Avatar"

import {Ionicons} from "@expo/vector-icons";

import {api} from '../../services/api.js'
import { styles } from "./style"
import { useNavigation } from '@react-navigation/core';
import { IconPost } from '../IconPost';

export default function Post(props){
    const navigation = useNavigation();

    const [userPost, setUserPost] = useState({});
    const [image, setImage] = useState({});
    const [like, setLike] = useState(false);
    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const {data} = await api.get(`/usuario/${props.userId}`);
                setUserPost(data);
            } catch (e) {
                console.log(e)
            }
    
        }

        fetchUser()
    },[])

    useEffect(()=>{
        const fetchImage = async () => {
            try {
                const {data} = await api.get('/postagem/imagem');
                
                const imageFinder = data.find(image => image.postagemId === props.postId)

                setImage(imageFinder)
                
            } catch(e){
                console.log(e)
            }
        }

        fetchImage()
    },[])
    
    function handlePerfil(){
        navigation.navigate('perfil', userPost);
    }
    
    function handlePostDetail(){
        navigation.navigate('PostDetail', props.postId)
    }

    return (
        <View style={styles.post} /*onPress={props.onPress}*/>

            <View style={{width: '100%', padding: 10}}>
                <View>
                    <View style={styles.userPost}>
                        <TouchableOpacity style={styles.user} onPress={handlePerfil}>
                            <View style={styles.perfil}><Avatar  uri="https://www.github.com/Wictor-dev.png" width={55} height={55}/></View>
                            <View style={{flex:1,flexDirection: 'row',alignItems:'center', paddingLeft: 10}}>    
                                <Text style={styles.name}>{userPost?.nome}</Text>
                            </View>
                        </TouchableOpacity>
                        <IconPost categoria= {props.categoria} />
                    </View>
                    
                </View>
                
                <View style={{flexDirection:'column',alignItems:'center',marginBottom: 10, marginTop: 5}}>
                    <Text style={styles.bookName}>{props.titulo}</Text>
                    {/* <Text style={[styles.bookName, {fontSize: 15}]}>{props.descricao}</Text> */}
                </View>
                <View style = {{flex: 1,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity style= {styles.bookImageContainer} onPress={handlePostDetail}  >
                        <Image style={styles.imagePost} source={{uri: image?.url}} resizeMode='contain' />
                        {/* <Image style={styles.imagePost} source={{uri: 'https://harpia-api.s3.amazonaws.com/5d5763f627b28194e8dd42aadc0dce33-2c477edf-9b04-45d7-85c9-cca76433853b.jpg'}} /> */}
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={{borderTopWidth:1, flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop : 10,paddingBottom:4}}></View>
                    <View style={styles.bottomPost}>
                        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', paddingLeft: 10, paddingRight: 10}}>
                            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={{paddingRight: 10}}>{`${props.logradouro}, ${props.bairro}`}</Text>
                            </View>
                            
                            {/* <FontAwesome5 name='heart' size={30} color="#000" style={styles.heartIcon} /> */}
                            {(like) ? (
                                <Ionicons name='heart' size={30} color="red" onPress={() => {setLike(false)}} />)
                            : (
                            <Ionicons name='heart-outline' size={30} color="#000" onPress={()=>{setLike(true)}} />
                            )}
                        </View>
                        

                    </View>
                </View>
                
            </View>
        </View>
    )
}