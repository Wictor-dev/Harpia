import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
import {Avatar} from "../Avatar"

import {FontAwesome5} from "@expo/vector-icons";

// import {ImagePost} from "../ImagePost";

import { styles } from "./style"

export default function Post(props){
    return (
        <View style={styles.post} /*onPress={props.onPress}*/>
            <View style={styles.userPost}>
                <View style={styles.user}>
                    <View style={styles.perfil}><Avatar  uri="https://www.github.com/EzequielCosta.png" width={55} height={55} /></View>
                    <Text style={styles.name}>Ezequiel Costa</Text>
                </View>
                <FontAwesome5 name='money-bill' size={30} color="#000"  />
            </View>
            <Text style={styles.bookName}>{props.titulo}</Text>
            <TouchableOpacity style= {styles.bookImageContainer} onPress={props.handlePostDetail}  >
                {/* <ImagePost uri = "https://cf.shopee.com.br/file/c072b86d0c3184e4c9735cc13ce796fe" /> */}
                <Image style= {styles.imagePost} source={{ uri: 'https://cf.shopee.com.br/file/c072b86d0c3184e4c9735cc13ce796fe'}} />
            </TouchableOpacity>
        </View>
    )
}