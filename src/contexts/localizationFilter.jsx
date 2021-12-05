import React, {useState, createContext, useContext} from 'react';

export const LocalizationFilterContext = createContext({});

export const localizationFilterProvider = ({children}) => {
    const [localFilter, setLocalFilter] = useState('Teresina - PI');

    function handleLocalFilter(e){
        setLocalFilter(e)
    }
    return (
        <LocalizationFilterContext.Provider value={{localFilter, handleLocalFilter}}>
            {children}
        </LocalizationFilterContext.Provider>
    )
}

export function useLocalFilter(){
    const context = useContext(LocalizationFilterContext);

    return context;
}