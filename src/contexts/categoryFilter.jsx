import React, {useState, createContext, useContext} from 'react';

export const CategoryContext = createContext({});

export const CategoryFilterProvider = ({children}) => {
    const [categoryFilter, setCategoryFilter] = useState('All');

    function handleCategory(e){
        setCategoryFilter(e)
    }

    return (
        <CategoryContext.Provider value={{categoryFilter, handleCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export function useCategory(){
    const context = useContext(CategoryContext);

    return context;
}