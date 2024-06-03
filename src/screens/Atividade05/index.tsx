import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

export function Atividade05() {
    const [name, setName] = useState('');
    const [nameField, setNameField] = useState('');
    const [confirmar, setConfirmar] = useState(false);

    const handleSendName = () => {
        setName(nameField);
        setNameField('');
    }

    const handleClear = () => {
        setName('');
        setConfirmar(false);
    }

    const handleConfirm = () => {
        setConfirmar(true);
    }

    return (
        <View style={styles.container}>
            {name == '' && confirmar == false &&
                <View style={styles.layout1}>
                    <Text style={styles.texto1}>Qual o seu nome?</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setNameField(texto)} />

                    <Button
                        title="Enviar"
                        color='#FFA051'
                        onPress={handleSendName}
                    />
                </View>
            }

            {name != '' && confirmar == false &&
                <View style={styles.layout2}>
                    <Text style={styles.texto2}>Olá {name}</Text>
                    <Text style={styles.texto1}>Tudo bem?</Text>
                    <Button
                        title={`Não sou ${name}`}
                        color='#FFA051'
                        onPress={handleClear}
                    />
                    <Button
                        title={`Confirmar`}
                        color='#00B050'
                        onPress={handleConfirm}
                    />
                </View>
            }

            {confirmar == true &&
                <View style={styles.view2}>
                    <Image style={styles.img} source={require('./assets/profile.png')} ></Image>
                    <Text style={styles.texto3}>{name}</Text>
                    <View style={styles.layout2}>
                        <Text style={styles.texto2}></Text>
                        <Text style={styles.texto1}></Text>
                        <Button
                            title={`Logout`}
                            color='#FFA051'
                            onPress={handleClear}
                        />
                    </View>
                </View>
            }
        </View>
    )
}
