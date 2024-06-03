import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

export function Pinterest() {
    const [emailorphone, onChangeText] = React.useState('');
    const [password, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./assets/logo-pinterest.png')}
            >
            </Image>
            <Text style={styles.title}>
                Log in to see more
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={emailorphone}
                placeholder="Email or phone number"
                placeholderTextColor='#00000080'
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={password}
                placeholder="Password"
                placeholderTextColor='#00000080'
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton}>Login in</Text>
            </TouchableOpacity>

            <Text style={styles.or}>
                OR
            </Text>

            <TouchableOpacity style={styles.facebookButton}>
                <Image
                    style={styles.miniFacebook}
                    source={require('./assets/logo-facebook.png')}
                >
                </Image>

                <Text style={styles.textButton}>Continue with Facebook</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGoogle}>
                <Image
                    style={styles.logoGoogle}
                    source={require('./assets/logo-google.png')}
                >
                </Image>

                <Text style={styles.textButton}>Continue with Google</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={styles.text} >Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.text}>Are yoou a business? Get started here</Text>
            </TouchableOpacity>

            <View style={styles.line}></View>

            <TouchableOpacity>
                <Text style={styles.text}>Not on Pinterest yet? Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}
