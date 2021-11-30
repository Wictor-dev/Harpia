import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./style";

export default function Filter(){
    const [localVisible, setLocalVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [selectedLocal, setSelectedLocal] = useState('Teresina - PI');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    return(
        <View style={styles.filter}>
            <View style={(localVisible) ? styles.centeredView : styles.invisible}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={localVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setLocalVisible(!localVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Selecione a localização</Text>
                            <View styles={styles.pickerItem}>
                                <Picker  
                                    selectedValue={selectedLocal}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLocal(itemValue)
                                    }>
                                    <Picker.Item label="Teresina - PI" value="Teresina - PI" />
                                    <Picker.Item label="Timon - MA" value="Timon - MA" />
                                    <Picker.Item label="Parnaíba - PI" value="Parnaíba - PI" />
                                    <Picker.Item label="Altos - PI" value="Altos - PI" />
                                </Picker>
                            </View>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLocalVisible(!localVisible)}
                                >
                                <Text style={styles.textStyle}>Confirmar</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={(categoryVisible) ? styles.centeredView : styles.invisible}>
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
                                    selectedValue={selectedCategory}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCategory(itemValue)
                                    }>
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
            <TouchableOpacity style = {styles.localization} onPress={()=>{setLocalVisible(true)}}>
                <Text style={styles.title} >{selectedLocal}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.category} onPress={()=>{setCategoryVisible(true)}}>
                <Text style={styles.title} >Categoria: {selectedCategory}</Text>
            </TouchableOpacity>
        </View>
    )
}