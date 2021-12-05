import React from 'react';
import {Ionicons, FontAwesome, SimpleLineIcons, Entypo, Feather} from "@expo/vector-icons";

export function IconPost({categoria}){
    if(categoria == 'doar'){
        return (
            <SimpleLineIcons name="present" size={30} color="#000" />
        )
    }else if (categoria == 'venda'){
        return (
            <Feather name="tag" size={30} color="#000" />
        )
    }
    else {
        return (
            <FontAwesome name="handshake-o" size={30} color="#000" />
        )
    }
}
  
