import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { Avatar } from '../../components/Avatar'
export function Message({handleMessage}){
    return(
        <TouchableOpacity onPress={handleMessage} style={styles.messageContainer}>
            {/* <Image style={styles.avatar} source={{uri: "https://www.github.com/EzequielCosta.png" }} /> */}
            <Avatar uri="https://www.github.com/Wictor-dev.png" width={55} height={55} />
            <View style={styles.infoMessage}>
                <Text>Bessie Cooper</Text>
            </View>
            <View style={styles.infoMessage}>
                <Text>Armagedom</Text>
            </View>
            <View style={styles.infoMessage}>
                <Text>Empréstimo</Text>
            </View>
        </TouchableOpacity>
    )
}