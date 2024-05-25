import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        height: 110,

        flexDirection: 'row',
        gap: 20,

        marginHorizontal: 14,
        marginVertical: 10,
        padding: 10,

        borderBlockColor: '#000000',
        borderColor: '#00000060',
        borderWidth: 0.5,
        borderRadius: 10,
    },

    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },

    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        paddingBottom: 5,
    },

    textContainer: {
        width: '70%'
    }
})
