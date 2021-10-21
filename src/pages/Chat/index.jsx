import React from 'react'
import { Text, View } from 'react-native'
import { Message } from '../../components/Message'
import { styles } from './style'

export function Chat(){
    return(
        <View style={styles.chatContainer}>
            <Message />
            <Message />
            <Message />
        </View>
    )
}