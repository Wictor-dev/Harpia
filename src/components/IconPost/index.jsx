import React from 'react';
import {Ionicons} from "@expo/vector-icons";
export function IconPost({categoria}){
    if(categoria == 'doação'){
        return (
            <Ionicons name='alert' size={30} color="#000" />
        )
    }
    if (categoria == 'venda'){
        return (
            <Ionicons name='pricetags' size={30} color="#000" />
        )
    }
    if (categoria == 'doação'){
        return (
            <Ionicons name='rose' size={30} color="#000" />
        )
    }
    else {
        return (
            <Ionicons name='bonfire' size={30} color="#000" />
        )
    }
}
  
