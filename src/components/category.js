import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function CategorySection() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.section}>
        <Text style={styles.title}>Chicken Recipes</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  section: {
    width: 200,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'pink',
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
