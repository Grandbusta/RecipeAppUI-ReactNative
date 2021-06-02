import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({text}) {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: '8%',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
});
