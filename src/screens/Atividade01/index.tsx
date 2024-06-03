import { useState } from "react";
import { View, Button, Text } from "react-native";
import { styles } from "./styles";
import { CustomButton } from "../Home/components/Button";

export function Atividade01() {
    const [name, setName] = useState('')
    const [time, setTime] = useState('')

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Nome:  {name}</Text>
                <Text style={styles.text}>Time:  {time}</Text>
            </View>
       
            <View>
                <CustomButton color="#005FB1" text="Carlos" nav={() => setName('Carlos')} />
                <CustomButton color="#005FB1" text="Paulo" nav={() => setName('Paulo')} />
                <CustomButton color="#005FB1" text="Vasco" nav={() => setTime('Vasco')} />
                <CustomButton color="#005FB1" text="Flamengo" nav={() => setTime('Flamengo')} />
            </View>         
        </View>
    )
}
