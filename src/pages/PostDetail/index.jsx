import React from "react";
import { View, Text,Image, ScrollView } from "react-native";

import { styles } from "./style";

export function PostDetail(){

    const descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit elit. Pellentesque laoreet ut mauris sed finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In turpis libero, sagittis in pulvinar a, tristique a eros. Praesent a accumsan est."

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style= {styles.container}>
                <View>
                    <Image style={styles.imagePost} source={{uri: "https://cf.shopee.com.br/file/c072b86d0c3184e4c9735cc13ce796fe"}} />
                </View>
                
                <View style={styles.description}>
                    <Text>
                        {descricao}        
                    </Text>
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                </View>

                <View style={styles.infoPost}>
                    <View style={styles.infoPostRow}>
                        <Text style={styles.textInfo} >Autor: Ezequiel Costa </Text>
                        <Text style={styles.textInfo} >Ano: 2005</Text>
                    </View>
                    <View style={styles.infoPostRow}>
                        <Text style={styles.textInfo}>Valor: R$ 15,00</Text>
                        <Text style={styles.textInfo}>Período: 1 semana</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

    
}

