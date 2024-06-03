import { createStackNavigator } from '@react-navigation/stack'
import { HomeRecipe } from './screens/AtividadeStack/HomeRecipe'
import { RecipeDescription } from './screens/AtividadeStack/RecipeDescription'
import { Home } from './screens/Home'
import { AppBanco } from './screens/AppBanco'
import { Atividade01 } from './screens/Atividade01'
import { Atividade05 } from './screens/Atividade05'
import { Atividade06 } from './screens/Atividade06'
import { Atividade03 } from './screens/Atividade03'
import { Atividade07 } from './screens/Atividade07'
import { Atividade04 } from './screens/Atividade04'
import { Pinterest } from './screens/Pinterest'

const Stack = createStackNavigator()

export function Routes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='AppBanco' component={AppBanco} />
            <Stack.Screen name='Pinterest' component={Pinterest} />
            <Stack.Screen name='Atividade01' component={Atividade01} />
            <Stack.Screen name='Atividade03' component={Atividade03} />
            <Stack.Screen name='Atividade04' component={Atividade04} />
            <Stack.Screen name='Atividade05' component={Atividade05} />
            <Stack.Screen name='Atividade06' component={Atividade06} />
            <Stack.Screen name='Atividade07' component={Atividade07} />
            <Stack.Screen name='HomeRecipe' component={HomeRecipe} />
            <Stack.Screen name='RecipeDescription' component={RecipeDescription} />
        </Stack.Navigator>
    )
}
