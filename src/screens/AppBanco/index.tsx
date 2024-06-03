import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./styles";
import { IconCard } from "./components/IconCard";


export function AppBanco() {
    function Mensagem() {
        Alert.alert('Go')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headHeader}>
                    <Icons onPress={Mensagem} name="menu" size={20} color='#fff'></Icons>
                    <Icons onPress={Mensagem} name="bell-outline" size={20} color='#fff'></Icons>
                </View>

                <View style={styles.headBody}>
                    <View style={styles.headBodyValue}>
                        <Text style={styles.textValue}>2800,00 R$</Text>
                        <Text style={styles.textBalance}>Available Balance</Text>
                    </View>
                    <View style={styles.headBodyButton}>
                        <Pressable style={styles.buttonTopMe}>
                            <Text style={styles.textButtonTopMe}>TOP ME</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.modaloptions}>
                <IconCard
                    icone="send"
                    corIcone="#4A44FF"
                    texto="Send"
                    corBackground="#F3F3FF"
                    onpress={Mensagem}
                />

                <IconCard
                    icone="credit-card-settings-outline"
                    corIcone="#00BBF4"
                    texto="Pay"
                    corBackground="#EFFFFF"
                    onpress={Mensagem}
                />

                <IconCard
                    icone="message-arrow-left"
                    corIcone="#FF814A"
                    texto="Request"
                    corBackground="#FFF1EB"
                    onpress={Mensagem}
                />
                <IconCard

                    icone="newspaper-variant-outline"
                    corIcone="#FF4085"
                    texto="Invoice"
                    corBackground="#FFEFF5"
                    onpress={Mensagem}
                />

                <IconCard
                    icone="cards-heart"
                    corIcone="#C871F7"
                    texto="Charity"
                    corBackground="#F9F0FE"
                    onpress={Mensagem}
                />

                <IconCard
                    icone="piggy-bank"
                    corIcone="#825EED"
                    texto="Loan"
                    corBackground="#F4F1FD"
                    onpress={Mensagem}
                />
            </View>
        </View>
    )
}
