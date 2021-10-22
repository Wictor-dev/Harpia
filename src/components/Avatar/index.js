import React from "react";
import {Image} from "react-native";

import { styles } from "./style";

export function Avatar( props ){
    
    return(
        <Image style={[styles.container,{ width: props.width, height: props.height, borderRadius : Math.round(props.width / 2) }]}
            source={{uri: props.uri}}
         />
    )
}