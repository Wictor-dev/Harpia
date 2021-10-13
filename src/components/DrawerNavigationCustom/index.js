import React from "react";
import {View, SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import {Avatar} from "../../components/Avatar";
import {Ranking} from "../../components/Ranking";


import { styles } from "./style";


export function DrawerNavigationCustom(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <Avatar  uri="https://www.github.com/EzequielCosta.png"/>
                <Ranking style={styles.ranking} />
                <TouchableOpacity ><Text>Ver perfil</Text></TouchableOpacity>
            </View>
            
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />    
            </DrawerContentScrollView>
        </SafeAreaView>
        
        
    )

}

