import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

export function Atividade04() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('/')
    const [confirmar, setConfirmar] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.text}>Nome</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#ccc"
                    onChangeText={(emailUser) => setEmail(emailUser)}
                />

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite seu email"
                    placeholderTextColor="#ccc"
                    onChangeText={(senhaUser) => setSenha(senhaUser)}
                />
                <Text style={styles.text}>Confirmar Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirme seu email"
                    placeholderTextColor="#ccc"
                    onChangeText={(confirmarUser) => setConfirmar(confirmarUser)}
                />

                {senha == '' &&
                    <Text style={styles.iguais}></Text>
                } 
                {senha == confirmar && senha != ''  &&
                    <Text style={styles.iguais}>Muito bem!</Text>
                }
                {senha != confirmar && senha != '' &&
                    <Text style={styles.diferentes}>Os email precisam ser iguais</Text>
                }
            </View>
        </View>
    )
}
