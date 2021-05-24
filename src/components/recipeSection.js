import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
const bezos = require('../assets/images/1.png');
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RecipeSection({title, imgUrl, navigation}) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.section}>
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
    flexDirection: 'row',
    marginVertical: 15,
  },
  sectionDetails: {
    width: '70%',
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