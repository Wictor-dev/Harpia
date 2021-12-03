import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { PostProvider } from './src/contexts/postsContext';
import { ExtraFieldProvider } from './src/contexts/ExtraFields';

export default function App() {
  
  return (
    
    <NavigationContainer>
        <StatusBar style="light" backgroundColor='#000' translucent={false} />
        <AuthProvider value={{signed:false}}>
          <PostProvider>
            <ExtraFieldProvider>
              <Routes />
            </ExtraFieldProvider>
          </PostProvider>
        </AuthProvider>
    </NavigationContainer>
    
  );
}



