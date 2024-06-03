import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 24,
        justifyContent: 'space-between'
    },

    button: {
        height: 45,
        width: 60,
        borderRadius: 5,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#ffffff',
        fontSize: 18,
    },

    containerNumber: {
        height: 45,
        width: 45,
        backgroundColor: '#00000030',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    number: {
        padding: 10,
        color: '#000000',
        fontSize: 18,
    }
})
