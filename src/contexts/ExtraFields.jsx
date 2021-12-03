import React, {createContext, useContext, useState} from 'react';


export const ExtraFieldContext = createContext({});
export const ExtraFieldProvider = ({children}) => {
    const [valor, setValor] = useState('');
    const [dataDevolucao, setDataDevolucao] = useState('');
    const [itens, setItens] = useState('');

    const handleValor = (e) => {
        setValor(e)
    }
    const handleData = (e) => {
        setDataDevolucao(e);
    }
    const handleItens = (e) => {
        setItens(e);
    }

    return (
        <ExtraFieldContext.Provider value={{valor, handleValor, dataDevolucao, setDataDevolucao, itens, handleItens}}>
            {children}
        </ExtraFieldContext.Provider>
    )
}

export function useExtraField(){
    const context = useContext(ExtraFieldContext);

    return context;
}
