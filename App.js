import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { PostProvider } from './src/contexts/postsContext';

export default function App() {
  
  return (
    
    <NavigationContainer>
        <StatusBar style="light" backgroundColor='#000' translucent={false} />
        <AuthProvider value={{signed:false}}>
          <PostProvider>
            <Routes />
          </PostProvider>
        </AuthProvider>
    </NavigationContainer>
    
  );
}



