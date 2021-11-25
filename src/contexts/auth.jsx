import React, {createContext, useEffect, useState, useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

import { useNavigation } from '@react-navigation/core';

const AuthContext= createContext({});

export const AuthProvider = ({children}) => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            await new Promise(resolve => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }

            if(user === null){
                setLoading(false)
            }
        }

        loadStoragedData();
    },[]);
    async function getUsuarios(){
        const {data} = await api.get('/usuarios');
        setUsers(data)
    }
    async function signIn(emailProp, senhaProp){
        getUsuarios();
        const userEncounter = users.find(user => user?.email == emailProp && user?.senha == senhaProp);

        const {data} = await api.get(`/usuarios/${userEncounter._id}`);
        
        setUser(data);

        api.defaults.headers['Authorization'] = `Bearer ${data._id}`;
        
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data));
        await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(data._id));
       
    }


    async function signOut(){
        AsyncStorage.clear().then(()=>{setUser(null)});
    }

    async function signUp(article){
        try{
            await api.post('usuarios/criar', article).then(()=>{navigation.navigate('InitialScreen')})
        } catch(e){
            console.log(e)
        }
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}