import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button, TextInput} from 'react-native-paper';
const bezos = require('../assets/images/1.png');
import Title from '../components/title';
import RecipeSection from '../components/recipeSection';
import CategorySection from '../components/category';
import {allRecipe} from '../shared/data';

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
                background: 'transparent',
              },
            }}
            style={{paddingHorizontal: '8%'}}
            mode="outlined"
            left={
              <TextInput.Icon
                name={() => <Icon name="search" color="black" size={16} />}
              />
            }
          />
          <Title text="Ingredients" />
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: '8%'}}>
            <CategorySection />
            <CategorySection />
            <CategorySection />
          </ScrollView>
          <Title text="Trending" />
          {allRecipe.map((item, index) => (
            <RecipeSection
              key={item.id}
              title={item.title}
              imgUrl={item.image}
              index={index}
            />
          ))}

          {/* <FlatList
            data={data}
            renderItem={({item, index}) => (
              <RecipeSection
                title={item.title}
                imgUrl={item.image}
                index={index}
              />
            )}
            keyExtractor={item => item.id}
          /> */}
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
