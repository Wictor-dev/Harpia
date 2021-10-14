import React from 'react'
import { TouchableOpacity } from 'react-native'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Feather } from '@expo/vector-icons'

import {Home} from '../pages/Home';
import {PostDetail} from '../pages/PostDetail';

import {DrawerNavigation} from "./DrawerNavigation";


const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            {/* <DrawerNavigation/> */}
            <Stack.Navigator>

                <Stack.Screen 
                    name='home' 
                    component={DrawerNavigation}
                    options={{
                        headerShown: false
                    }}
                />
                {/* <Stack.Screen 
                    name='home' 
                    component={Home}
                    options={{
                        title: 'Harpia',
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="menu"
                                    size={25}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                /> */}

                <Stack.Screen
                    name='PostDetail'
                    component={PostDetail}
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