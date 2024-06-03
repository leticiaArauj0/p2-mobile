import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native";

interface ButtonProps {
    text: string,
    nav: () => void,
    color: string
}

export function CustomButton({ text, nav, color }: ButtonProps) {
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={nav}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}