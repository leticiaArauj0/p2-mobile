import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { receitas } from '../data';
import { styles } from './styles';

export function HomeRecipe ({ navigation }: any) {
  return (
    <View>
      <Text style={{color: '#000000', fontSize: 24, fontWeight: '600', textAlign: 'center', margin: 24}}>Receitas</Text>
      <FlatList
        data={receitas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('RecipeDescription', { receita: item, index: receitas.indexOf(item) })}
          >
            <Image source={{uri: item.imagem}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.titulo}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
