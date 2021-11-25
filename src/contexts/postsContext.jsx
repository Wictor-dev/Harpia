import React, { createContext, useContext, useState, useEffect } from 'react';

import {api} from '../services/api';

const PostContext = createContext({});

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchApi = async ()=>{
            const {data} = await api.get('postagens')
            setPosts(data)
        }
        fetchApi();
    }, [])

    return (
        <PostContext.Provider value={{posts}}>
            {children}
        </PostContext.Provider>
    )
}

export function usePost(){
    const context = useContext(PostContext);

    return context;
}

