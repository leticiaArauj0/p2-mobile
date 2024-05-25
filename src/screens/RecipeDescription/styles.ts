import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imagem: {
        height: 200,
        width: 300,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 20
    },

    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 24,
        color: '#000000'
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000000',
        marginBottom: 10,
    },

    text: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'justify',
    },
    
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
    },
})
