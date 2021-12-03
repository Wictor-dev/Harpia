import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./style";

export function LocalizationFilter(){
    const [localVisible, setLocalVisible] = useState(false)
    const [selectedLocal, setSelectedLocal] = useState('Teresina - PI');

    if (localVisible){
        return (
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
        )
    }
    else {
        return (
            <View style={styles.filter}>
                <TouchableOpacity style = {styles.localization} onPress={()=>{setLocalVisible(true)}}>
                    <Text style={styles.title} >{selectedLocal}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}