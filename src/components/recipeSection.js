import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {allRecipe, eachRecipe} from '../shared/data';

export default function RecipeSection({title, imgUrl, index, id, navigation}) {
  const oneRecipe = () => {
    const [recipe] = eachRecipe.filter(item => {
      return Number(item.id) === Number(id);
    });
    return recipe;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        const data = oneRecipe();
        navigation.navigate('RecipeDetails', {data: data});
      }}>
      <View style={styles.section}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 20}}>
          {index + 1}
        </Text>
        <Image source={{uri: imgUrl}} style={styles.sectionImg} />
        <View style={styles.sectionDetails}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 24,
  },
  section: {
    paddingHorizontal: '8%',
    flexDirection: 'row',
    marginVertical: 15,
  },
  sectionDetails: {
    flexBasis: '60%',
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sectionReadMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  readMore: {
    fontSize: 18,
    color: 'grey',
  },
  sectionImg: {
    width: '30%',
    height: 100,
    borderRadius: 15,
  },
});
