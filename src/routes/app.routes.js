import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {PostDetail} from '../pages/PostDetail';

import {DrawerNavigation} from "./DrawerNavigation";
import { Perfil } from '../pages/Perfil';
import { Chat } from '../pages/Chat';
import { Publish } from '../pages/Publish';
import { OpenedChat } from '../pages/OpenedChat';

import { theme } from '../global/styles/theme'
import { PublishLocal } from '../pages/Publish/PublishLocal';

const Stack = createStackNavigator();

function AppRoutes(){
    return (
        
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign:'center',               
                }}
            >

                <Stack.Screen 
                    name='home' 
                    component={DrawerNavigation}
                    options={{
                        headerShown: false,                      
                    }}
                />

                <Stack.Screen
                    name='PostDetail'
                    component={PostDetail}
                    options={{
                        title: 'Detalhes do Post',
                        back: true,
                        headerStyle: {backgroundColor: theme.colors.secondary100},
                        headerTintColor: 'white'
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
                    name='publish'
                    component={Publish}
                    options={{
                        title: 'Publicar',
                        back: true
                        
                    }}
                />
                <Stack.Screen
                    name='publishLocal'
                    component={PublishLocal}
                    options={{
                        title: 'Publicar',
                        back: true
                        
                    }}
                />
                <Stack.Screen
                    name='chat'
                    component={Chat}
                    options={{
                        title: 'Chat',
                        back: true
                        
                    }}
                />

                <Stack.Screen 
                    name='OpenedChat'
                    component={OpenedChat}
                    options={{
                        back: true
                    }}
                />

            </Stack.Navigator>
        
    )
}

export default AppRoutes;