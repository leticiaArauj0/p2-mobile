import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    layout1: {
        height: 450,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#131047',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10
    },

    layout2: {
        height: 250,
        width: '100%',
        flexDirection: 'column',
        marginTop: 210,
        backgroundColor: '#131047',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10,
        gap: 10,
    },

    texto1: {
        color: '#fff',
        fontSize: 20,
        margin: 10
    },

    texto2: {
        color: '#fff',
        fontSize: 30,
    },

    input: {
        width: 300,
        fontSize: 16,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#f1f1f1',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 20,
        color: '#000000'
    },

    img: {
        height: 230,
        width: 230,
        marginBottom: 30,
    },

    view2: {
        width: '100%',
        alignItems: 'center',
  
    },

    texto3: {
        fontSize: 40,
        color: "black"
    }
})
