import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {PostDetail} from '../pages/PostDetail';

import {DrawerNavigation} from "./DrawerNavigation";
import { Perfil } from '../pages/Perfil';
import { Post } from '../pages/Post';


const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name='home' 
                    component={DrawerNavigation}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='PostDetail'
                    component={PostDetail}
                    options={{
                        title: 'Post',
                        back: true
                        
                    }}
                />
                <Stack.Screen
                    name='perfil'
                    component={Perfil}
                    options={{
                        title: 'Perfil',
                        back: true
                        
                    }}
                />

                <Stack.Screen
                    name='post'
                    component={Post}
                    options={{
                        title: 'Post',
                        back: true
                        
                    }}
            />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default Routes;