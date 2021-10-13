import React from "react";
import {Image} from "react-native";

import { styles } from "./style";

export function Avatar( props ){
    return(
        <Image style={styles.container}
            source={{uri: props.uri}}
         />
    )
}