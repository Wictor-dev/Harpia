import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./style";

export function Message(){
    return(
        <View style={styles.messageContainer}>
            <Image style={styles.avatar} source={{uri: "https://www.github.com/EzequielCosta.png" }} />
            <View style={styles.infoMessage}>
                <Text>Bessie Cooper</Text>
            </View>
            <View style={styles.infoMessage}>
                <Text>Armagedom</Text>
            </View>
            <View style={styles.infoMessage}>
                <Text>Empréstimo</Text>
            </View>
        </View>
    )
}