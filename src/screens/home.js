import React from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
import Title from '../components/title';
import RecipeSection from '../components/recipeSection';
import CategorySection from '../components/category';
import {allRecipe} from '../shared/data';
const chicken = require('../assets/images/chicken.jpg');
const cheese = require('../assets/images/cheese.jpg');

export default function Home({navigation}) {
  return allRecipe.length ? (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TextInput
            placeholder="Search"
            theme={{
              colors: {
                primary: 'orange',
                underlineColor: 'transparent',
              },
            }}
            style={{paddingHorizontal: '8%', marginTop: '5%'}}
            mode="outlined"
            left={
              <TextInput.Icon
                name={() => <Icon name="search" color="black" size={16} />}
              />
            }
          />
          <Title text="Ingredients" length={3} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: '8%'}}>
            <CategorySection img={cheese} name="Cheese Recipes" />
            <CategorySection img={chicken} name="Chicken Recipes" />
            <CategorySection img={cheese} name="Cheese Recipes" />
          </ScrollView>
          <Title text="Trending" length={allRecipe.length} />
          {allRecipe.map((item, index) => (
            <RecipeSection
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.image}
              navigation={navigation}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <View
      style={{
        ...styles.container,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color="orange" size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
