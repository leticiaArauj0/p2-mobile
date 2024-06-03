import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

type DadosIcon = {
    icone: string,
    corIcone: string,
    texto: string
    corBackground: string
    onpress: () => void
}

export function IconCard({ icone, corIcone, texto, corBackground, onpress }: DadosIcon) {
    return (
        <Pressable onPress={onpress} style={[styles.container, styles.border]}>
            <View style={[styles.bg, { backgroundColor: `${corBackground}` }]}>
                <Icons name={icone} size={30} color={corIcone} />
            </View>
            <Text style={styles.text}>{texto}</Text>
        </Pressable>
    );
}
