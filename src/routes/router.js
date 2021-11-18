import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Text } from 'react-native';
import {PostDetail} from '../pages/PostDetail';

import {DrawerNavigation} from "./DrawerNavigation";
import { Perfil } from '../pages/Perfil';
import { Chat } from '../pages/Chat';
import { Books } from '../pages/Books';
import { Publish } from '../pages/Publish';
import { Notifications } from '../pages/Notifications';
import { OpenedChat } from '../pages/OpenedChat';


const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign:'center'
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
                        headerStyle: {backgroundColor: 'red'},
                        headerRight: () => (<Text>Empréstimo</Text>)
                        
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

                <Stack.Screen
                    name='notifications'
                    component={Notifications}
                    options={{
                        title: 'Notificações',
                        back: true
                        
                    }}
                />

            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default Routes;