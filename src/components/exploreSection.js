import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
const bezos = require('../assets/images/1.png');
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ExploreSection({title, imgUrl, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Single News', {title: title, imgUrl: imgUrl});
      }}>
      <View style={styles.section}>
        <Image source={imgUrl} style={styles.sectionImg} />
        <View style={styles.sectionDetails}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <View style={styles.sectionReadMore}>
            <Text style={styles.readMore}>Read more</Text>
            <AntDesign name="arrowright" color="grey" size={24} />
          </View>
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
    height: 120,
    borderRadius: 15,
  },
});
