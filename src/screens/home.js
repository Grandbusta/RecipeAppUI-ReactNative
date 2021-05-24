import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button, TextInput} from 'react-native-paper';
const bezos = require('../assets/images/1.png');
import Title from '../components/title';
import RecipeSection from '../components/recipeSection';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingHorizontal: '8%'}}>
          <TextInput
            placeholder="Search"
            theme={{
              colors: {
                primary: 'orange',
                underlineColor: 'transparent',
                background: 'transparent',
              },
            }}
            mode="outlined"
            left={
              <TextInput.Icon
                name={() => <Icon name="search" color="black" size={16} />}
              />
            }
          />
          <Title text="Ingredients" />
          <RecipeSection
            title="Cauliflower, Brown Rice, and Vegetable Fried Rice"
            imgUrl="https://spoonacular.com/recipeImages/716426-312x231.jpg"
          />
          <RecipeSection
            title="Cauliflower, Brown Rice, and Vegetable Fried Rice"
            imgUrl="https://spoonacular.com/recipeImages/782601-312x231.jpg"
          />
          <ActivityIndicator color="orange" size={34} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
