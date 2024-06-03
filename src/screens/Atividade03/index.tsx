import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export function Atividade03() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('/');
    const [confirmar, setConfirmar] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(emailUser) => setEmail(emailUser)}
                />

                <Text style={styles.text}>Senha</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(senhaUser) => setSenha(senhaUser)}
                />
                <Text style={styles.text}>Confirmar Senha</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(confirmarUser) => setConfirmar(confirmarUser)}
                />
                {senha == '' &&
                    <Text style={styles.iguais}></Text>
                }
                {senha == confirmar && senha != ''  &&
                    <Text style={styles.iguais}>Senhas iguais</Text>
                }
                {senha != confirmar && senha != '' &&
                    <Text style={styles.diferentes}>Senhas não conferem</Text>

                }
            </View>
        </View>
    )
}
