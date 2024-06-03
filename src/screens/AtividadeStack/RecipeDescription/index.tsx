import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { receitas } from '../data';
import { styles } from './styles';

export function RecipeDescription ({ route, navigation }: any) {
  const { receita, index } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{receita.titulo}</Text>
        <Image source={{uri: receita.imagem}} style={styles.imagem} />

        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        {receita.ingredientes.map((ingrediente: string, idx: undefined) => (
          <Text key={idx} style={styles.text}>{ingrediente}</Text>
        ))}

        <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.text}>{receita.modoPreparo}</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="<"
            onPress={() => navigation.replace('RecipeDescription', { receita: receitas[index - 1], index: index - 1 })}
            disabled={index === 0}
            color='#131313'
          />
          <Button
            title="Sair"
            onPress={() => navigation.navigate('HomeRecipe')}
            color='#131313'
          />
          <Button
            title=">"
            onPress={() => navigation.replace('RecipeDescription', { receita: receitas[index + 1], index: index + 1 })}
            disabled={index === receitas.length - 1}
            color='#131313'
          />
        </View>
      </ScrollView>
    </View>
  );
};
