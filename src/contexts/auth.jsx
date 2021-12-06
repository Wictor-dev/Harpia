import React, {createContext, useEffect, useState, useContext} from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

import { useNavigation } from '@react-navigation/core';

const AuthContext= createContext({});

export const AuthProvider = ({children}) => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const passAlert = () => {
        Alert.alert('Usuário ou senha incorreta','tente novamente', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {text: 'OK', onPress: () => console.log('Ok Pressed')},
        ]);
    }


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
        try{
            const {data} = await api.get('/usuario');
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    }
    async function signIn(emailProp, senhaProp){
        getUsuarios();
        try {
            const userEncounter = users.find(user => user?.email === emailProp && user?.senha === senhaProp);
            
            const {data} = await api.get(`/usuario/${userEncounter._id}`);
            
            setUser(data);
    
            api.defaults.headers['Authorization'] = `Bearer ${data._id}`;
            
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data));
            await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(data._id));
        } catch (e){
            passAlert()
        }
    }


    async function signOut(){
        AsyncStorage.clear().then(()=>{setUser(null)});
    }

    async function signUp(article){
        // console.log(article)
        try{
            await api.post('/usuario/criar', article).then(()=>{navigation.navigate('InitialScreen')})
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