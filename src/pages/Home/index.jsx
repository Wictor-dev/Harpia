import React from 'react'
import {Text, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import Post from '../../components/Post'
import Filter from '../../components/Filter';


import { styles } from './style';

export function Home(){
    const navigation = useNavigation();

    function handlePostDetail(){
        navigation.navigate('PostDetail')
    }

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#069563'}}
        >
            <View style={styles.filterContainer}>
                <Filter />
            </View>
            <View style={styles.postsContainer}>
                <Post handlePostDetail = {handlePostDetail} />
                <Post />
                <Post />
            </View>
        </ScrollView>
    )
}