import React from 'react';

import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';

import { createStackNavigator } from '@react-navigation/stack';
import { InitialScreen } from '../pages/InitialScreen';

const AuthStack = createStackNavigator();

export const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{
                headerShown: false
            }}
        />

        <AuthStack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{
               headerTransparent: true,
               
            }}
        />

        <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerTransparent: true,
            }}
        />

    </AuthStack.Navigator>
)
