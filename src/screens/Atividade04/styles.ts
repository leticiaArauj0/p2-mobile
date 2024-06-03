import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242128',
    },

    containerInput: {
        width: 300,
        marginTop: 40,
        gap: 10,
    },

    text: {
        fontSize: 16,
        color: '#ffffff',
    },

    textInput: {
        height: 40,
        color: '#000000',
        backgroundColor: '#ffffff',
        fontSize: 14,
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
    },

    mensagemValidacao: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 250,
        height: 100,
    },

    iguais: {
        color: '#00ff00',
        alignSelf: 'flex-start'
    },

    diferentes: {
        color: '#ff0000',
    }
})
