import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Publish} from "../pages/Publish";
import {MainStackNavigation} from "./MainStackNavigation";


const {Navigator, Screen} = createDrawerNavigator();

export function DrawerNavigation(){
    return(
        <Navigator initialRouteName="Home" screenOptions = {{ drawerPosition : 'left' }} >
            <Screen name= "Home" component ={MainStackNavigation}/>
            <Screen name= "Publish" component ={Publish}/>
        </Navigator>
    )
    
}