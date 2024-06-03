import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: 20,
      backgroundColor: '#282c34',
    },

    display: {
      fontSize: 60,
      color: '#ffffff',
      textAlign: 'right',
      marginBottom: 10,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },

    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3e4042',
      margin: 5,
      height: 80,
      borderRadius: 40,
    },

    buttonText: {
      fontSize: 30,
      color: '#ffffff',
    },
  })
  