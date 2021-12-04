import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./style";

import {useCategory} from '../../contexts/categoryFilter';

export function CategoryFilter(){
    const [categoryVisible, setCategoryVisible] = useState(false)
    const { categoryFilter, handleCategory } = useCategory();

    if (categoryVisible) {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={categoryVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setCategoryVisible(!categoryVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Selecione a categoria</Text>
                            <View styles={styles.pickerItem}>
                                <Picker  
                                    selectedValue={categoryFilter}
                                    onValueChange={(itemValue, itemIndex) =>
                                        handleCategory(itemValue)
                                    }>
                                    <Picker.Item label="Geral" value="All" />
                                    <Picker.Item label="Venda" value="venda" />
                                    <Picker.Item label="Troca" value="troca" />
                                    <Picker.Item label="Empréstimo" value="emprestimo" />
                                    <Picker.Item label="Doação" value="doação" />
                                </Picker>
                            </View>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setCategoryVisible(!categoryVisible)}
                                >
                                    <Text style={styles.textStyle}>Confirmar</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    else {
        return (
            <View style={styles.filter}>
                <TouchableOpacity style = {styles.category} onPress={()=>{setCategoryVisible(true)}}>
                    <Text style={styles.title} >Categoria: {categoryFilter}</Text>
                </TouchableOpacity>
            </View>
        )   
    }
}