import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingHorizontal: 24}}>
          <Text>Home</Text>
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
