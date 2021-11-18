import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerNavigationCustom } from "../components/DrawerNavigationCustom";
import {Ionicons,} from "@expo/vector-icons";
import {Home} from "../pages/Home";



const {Navigator, Screen} = createDrawerNavigator();

export function DrawerNavigation(){
    return(
        <Navigator initialRouteName="Home"  drawerContent={(props) => <DrawerNavigationCustom {...props} />} >
            
            <Screen
                name= "Posts" 
                options = {{
                    drawerIcon: ({focused, color, size}) => (<Ionicons name="home" size={size} color={color}/>),
                    headerTitleAlign:'center'
                }}
                component ={Home} 
            />

        </Navigator>
    )
    
}