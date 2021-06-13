import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CategorySection({img, name}) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={{...styles.section}}>
        <ImageBackground
          source={img}
          style={styles.imgBg}
          imageStyle={{borderRadius: 25}}>
          <View style={styles.transBg}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.likeSect}>
              <Icon
                name="hearto"
                size={24}
                style={{marginTop: 10}}
                color="white"
              />
              <Text style={styles.text}>56+</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  section: {
    width: 200,
    height: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  imgBg: {width: '100%', height: '100%', justifyContent: 'flex-end'},
  transBg: {
    width: '100%',
    height: '45%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  likeSect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {fontSize: 18, color: 'white'},
});
