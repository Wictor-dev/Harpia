import React from 'react';
import { TextField } from '../TextField';

export function Fields({categoria}){
    if (categoria == 'venda'){
        return (
            <TextField 
                label={'Valor'}
                placeholder={'Digite o valor'}
            />
        )
    }
    else if (categoria === 'troca') {
        return (
            <TextField 
            label={'Itens de interesse'}
            placeholder={'Digite os itens que você quer...'}
            />
        )
    }
    else if (categoria==='emprestimo'){
        return (
            <>
                <TextField 
                    label={'Valor'}
                    placeholder={'Digite o valor'}
                />
                <TextField 
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