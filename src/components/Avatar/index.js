import React from "react";
import {Image} from "react-native";

import { styles } from "./style";

export function Avatar( props ){
    
    return(
        <Image style={[styles.container,{ width: props.width, height: props.height }]}
            source={{uri: props.uri}}
         />
    )
}