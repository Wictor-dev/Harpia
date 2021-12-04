import React from 'react';
import {Ionicons, Feather} from "@expo/vector-icons";
export function IconPost({categoria}){
    if(categoria == 'doação'){
        return (
            <Feather name="gift" size={30} color="#000" />
        )
    }
    if (categoria == 'venda'){
        return (
            <Feather name="tag" size={30} color="#000" />
        )
    }
    if (categoria == 'emprestimo'){
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
  
