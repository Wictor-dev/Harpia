import React from 'react';
import { useExtraField } from '../../contexts/ExtraFields';
import { TextField } from '../TextField';
import { View, Text, TextInput} from 'react-native';

export function Fields({categoria}){
    const {valor, handleValor, dataDevolucao, handleData, itens, handleItens} = useExtraField();

    if (categoria == 'venda'){

        return (
            <TextField 
                setarValor={handleValor}
                valor={valor}
                label={'Valor'}
                placeholder={'Digite o valor'}
            />
        )
    }
    else if (categoria === 'troca') {
        return (
            <TextField 
            valor={itens}
            setarValor={handleItens}
            label={'Itens de interesse'}
            placeholder={'Digite os itens que você quer...'}
            />
        )
    }
    else if (categoria==='emprestimo'){
        return (
            <>
                <TextField 
                    valor={valor}
                    setarValor={handleValor}
                    label={'Valor'}
                    placeholder={'Digite o valor'}
                />
                <TextField 
                    valor={dataDevolucao}
                    setarValor={handleData}
                    label={'Data de devolução'}
                    placeholder={'Digite a data de devolução...'}
                />
            </>
        )
    }
    else{
        return <></>
    }
}