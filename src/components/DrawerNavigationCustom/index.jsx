import React from "react";
import {View, SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/native";

import {Avatar} from "../Avatar";
import {Ranking} from "../Ranking";

//import {Feather} from "@expo/vector-icons";
import {Ionicons, MaterialIcons, Feather} from "@expo/vector-icons";

import { styles } from "./style";
import {useAuth} from "../../contexts/auth";


export function DrawerNavigationCustom(props) {

    const { signOut } = useAuth();
    const navigation =  useNavigation();
    function handleSignOut(){
        signOut();
    }
    function handleScreenPerfil(){
        navigation.navigate('perfil')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <Avatar width={80} height={80} uri="https://www.github.com/Wictor-dev.png"/>
                <Ranking style={styles.ranking} />
                <TouchableOpacity onPress={handleScreenPerfil} style={styles.buttonVerPerfil} ><Text >Ver perfil</Text></TouchableOpacity>
            </View>
            
            <DrawerContentScrollView {...props} >

                <DrawerItem
                    label="Home"
                    icon = { ({color, size}) => (
                        <Ionicons name="home" size={size} color={color}/>
                    )}
                    onPress={ () => navigation.navigate('Home') }
                />

                <DrawerItem
                    label="Publicar"
                    icon = { ({color, size}) => (
                        <Ionicons name="ios-add-circle-outline" size={size} color={color}/>
                    )}
                    onPress={ () => navigation.navigate('publish') }
                />

                <DrawerItem
                    label="Notificações"
                    icon = { ({color, size}) => (
                        <Ionicons name="notifications-sharp" size={size} color={color}/>
                    )}
                    onPress={ () => navigation.navigate('notifications') }
                />

                <DrawerItem
                    label="Chat"
                    icon = { ({color, size}) => (
                        <Ionicons name="chatbox" size={size} color={color}/>
                    )}
                    onPress={ () => navigation.navigate('chat') }
                />
                
                <DrawerItem
                    label="Salvos"
                    icon = { ({color, size}) => (
                        <MaterialIcons name="save-alt" size={size} color={color}/>
                    )}
                    //onPress={ () => navigation.navigate('favorites') }
                />

                <DrawerItem
                    label="Configurações"
                    icon = { ({color, size}) => (
                        <Ionicons name="settings" size={size} color={color}/>
                    )}
                    //onPress={ () => navigation.navigate('settings') }
                />

                {/* <DrawerItemList {...props} />     */}
            </DrawerContentScrollView>
            <DrawerItem
                label="Sair"
                icon = { ({color, size}) => (
                    <Feather name="log-out" size={size} color={color} />
                )}
                onPress={handleSignOut}
            />

            
        </SafeAreaView>
        
        
    )

}

