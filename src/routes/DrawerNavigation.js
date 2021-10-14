import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Publish} from "../pages/Publish";
import {MainStackNavigation} from "./MainStackNavigation";

import { DrawerNavigationCustom } from "../components/DrawerNavigationCustom";
import { CustomDrawerContent } from "../components/DrawerNavigationCustom";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Home} from "../pages/Home";
import {Perfil} from "../pages/Perfil";



const {Navigator, Screen} = createDrawerNavigator();

export function DrawerNavigation(){
    return(
        <Navigator initialRouteName="Home"  drawerContent={(props) => <DrawerNavigationCustom {...props} />} >
            
            <Screen
                name= "Home" 
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="home" size={size} color={color}/>)
                }}
                component ={Home} 
            />

            <Screen
                name= "Postar" 
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="ios-add-circle-outline" size={size} color={color}/>)
                }}
                component ={Perfil} 
            />
            <Screen
                name= "Notificações"
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="notifications-sharp" size={size} color={color}/>)
                }}
                component ={Publish}
            />
            <Screen
                name= "Chat"
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="chatbox" size={size} color={color}/>)
                }}
                component ={Publish}
            />
            <Screen
                name= "Configurações"
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="settings" size={size} color={color}/>)
                }}
                component ={Publish}
            />
            <Screen
                name= "Salvos"
                options = {{
                    drawerIcon: ({focused, color, size}) => (<MaterialIcons name="save-alt" size={size} color={color}/>)
                }}
                component ={Publish}
            />
        </Navigator>
    )
    
}