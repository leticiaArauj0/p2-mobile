import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    logo: {
        width: 65,
        height: 65,
        marginBottom: 20,
    },

    title: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#00000080'
    },

    input: {
        height: 40,
        width: "70%",
        color: '#000000',
        backgroundColor: "#f0f0f0",
        margin: 5,
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
    },

    or: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00000080',
        margin: 10,
    },

    loginButton: {
        height: 40,
        width: "70%",
        alignItems: 'center',
        backgroundColor: "#ef011f",
        borderRadius: 5,
        margin: 5,
        padding: 10,
    },

    textButton: {
        color: "white",
        fontWeight: 'bold',
    },

    facebookButton: {
        height: 40,
        width: "70%",
        flexDirection: "row",
        backgroundColor: "#3d5b9b",  
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        gap: 20,
    },

    buttonGoogle: {
        height: 40,
        width: "70%",
        flexDirection: "row",
        backgroundColor: "#0186fc",      
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        gap: 20,
    },

    text:  {
        color: '#00000080',
    },

    miniFacebook: {
        width: 45,
        height: 50,
    },

    logoGoogle: {
        width: 45,
        height: 40,
    },

    line: {
        width: 150,
        height: 1.1,
        backgroundColor: '#00000040',
        marginVertical: 15,
    },
})
