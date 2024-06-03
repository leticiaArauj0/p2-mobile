import { View } from "react-native";
import { styles } from "./styles";
import { CustomButton } from "./components/Button";

export function Home({ navigation }: any) {
    return(
        <View style={styles.container}>
            <CustomButton color="#910AF7" text="App Banco" nav={() => navigation.navigate('AppBanco')} />
            <CustomButton color="#910AF7" text="Pinterest" nav={() => navigation.navigate('Pinterest')} />
            <CustomButton color="#910AF7"  text="Atividade 01" nav={() => navigation.navigate('Atividade01')} />
            <CustomButton color="#910AF7"  text="Atividade 03" nav={() => navigation.navigate('Atividade03')} />
            <CustomButton color="#910AF7" text="Atividade 04" nav={() => navigation.navigate('Atividade04')} />
            <CustomButton color="#910AF7"  text="Atividade 05" nav={() => navigation.navigate('Atividade05')} />
            <CustomButton color="#910AF7"  text="Atividade 06" nav={() => navigation.navigate('Atividade06')} />
            <CustomButton color="#910AF7" text="Atividade 07" nav={() => navigation.navigate('Atividade07')} />
            <CustomButton color="#910AF7"  text="Atividade Stack" nav={() => navigation.navigate('HomeRecipe')} />
        </View>
    )
}
