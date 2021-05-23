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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 15,
    marginBottom: 10,
  },
});
