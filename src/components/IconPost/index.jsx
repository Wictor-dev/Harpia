import React from 'react';
import {Ionicons, FontAwesome, SimpleLineIcons, Entypo} from "@expo/vector-icons";

export function IconPost({categoria}){
    if(categoria == 'doar'){
        return (
            <SimpleLineIcons name="present" size={30} color="#000" />
        )
    }
    if (categoria == 'venda'){
        return (
            <Ionicons name='pricetags' size={30} color="#000" />
        )
    }
    else {
        return (
            <FontAwesome name="handshake-o" size={30} color="#000" />
        )
    }
}
  
