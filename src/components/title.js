import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({text, length}) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.text}>{`See all (${length})`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    color: 'blue',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
});
