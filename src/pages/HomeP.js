import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Post from '../components/Post'
import Filter from '../components/Filter';
import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#00FA9A'}}
        >
            <View style={styles.filterContainer}>
                <Filter />
            </View>
            <View style={styles.postsContainer}>
                <Post onPress={()=>navigation.navigate('post')} />
                <Post />
                <Post />
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    postsContainer: {
        width: '90%',
        margin: '5%',
    },
    filterContainer:{
        // borderWidth: 1,
        // borderColor: 'red',
        width: '60%',
        marginTop: '5%',
        marginLeft: '20%',
        marginRight: '20%',
        // margin: '5% 20% 0 20%', se fizer nessa maneira o Expo fecha
    }
})