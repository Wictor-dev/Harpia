import React from "react";
import {View, SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/native";

import {Avatar} from "../Avatar";
import {Ranking} from "../Ranking";

import {Feather} from "@expo/vector-icons";

import { styles } from "./style";


export function DrawerNavigationCustom(props) {

    const navigation =  useNavigation();

    function handleScreenPerfil(){
        navigation.navigate('Perfil')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <Avatar uri="https://www.github.com/EzequielCosta.png"/>
                <Ranking style={styles.ranking} />
                <TouchableOpacity onPress={handleScreenPerfil} ><Text>Ver perfil</Text></TouchableOpacity>
            </View>
            
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />    
            </DrawerContentScrollView>
            <DrawerItem
                label="Sair"
                icon = { ({color, size}) => (
                    <Feather name="log-out" size={size} color={color} />
                )}
            />

            
        </SafeAreaView>
        
        
    )

}

