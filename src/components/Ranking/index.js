import React from "react";
import { View } from "react-native";

import {AntDesign} from "@expo/vector-icons";

import { styles } from "./style";

export function Ranking( props){
    return(
        <View style={[styles.container,props.style]}>
            <AntDesign name='star' color='yellow' size={30}/>
            <AntDesign name='star' color='yellow' size={30}/>
            <AntDesign name='star' color='yellow' size={30}/>
            <AntDesign name='star' color='yellow' size={30}/>
            <AntDesign name='star' color='yellow' size={30}/>
        </View>
    )
}