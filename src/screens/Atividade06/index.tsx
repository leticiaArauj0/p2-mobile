import { useState } from "react";
import { Button, View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Atividade06() {
    const [number, setNumber] = useState(0)

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setNumber(number-1)}>
                <Text style={styles.text}>-1</Text>
            </TouchableOpacity>
            <View style={styles.containerNumber}>
                <Text style={styles.number}>{number}</Text>
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#229A00'}]} onPress={() => setNumber(number+1)}>
                <Text style={styles.text}>+1</Text>
            </TouchableOpacity>
        </View>
    )
}
