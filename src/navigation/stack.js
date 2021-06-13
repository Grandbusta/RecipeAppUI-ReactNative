import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import RecipeDetails from '../screens/recipeDetails';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{
            title: 'Recipe Details',
            headerTitleStyle: {fontSize: 20},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
