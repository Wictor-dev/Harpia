import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { Message } from '../../components/Message'
import { styles } from './style'

export function Chat(){
    const navigation = useNavigation();

    const handleMessage = () => {
        navigation.navigate('OpenedChat')
    }
    return(
        <View style={styles.chatContainer}>
            <Message handleMessage={handleMessage} />
            <Message />
            <Message />
        </View>
    )
}