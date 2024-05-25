import { createStackNavigator } from '@react-navigation/stack'
import { HomeRecipe } from './screens//HomeRecipe'
import { RecipeDescription } from './screens/RecipeDescription'

const Stack = createStackNavigator()

export function Routes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeRecipe' component={HomeRecipe} />
            <Stack.Screen name='RecipeDescription' component={RecipeDescription} />
        </Stack.Navigator>
    )
}
