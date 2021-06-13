import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {Button, Chip} from 'react-native-paper';

export default function recipeDetails({route}) {
  const {data} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{uri: data.image}} style={styles.mainImg} />
        <View style={styles.detailView}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{data.title}</Text>
            <Button
              mode="contained"
              color="yellow"
              uppercase={false}
              labelStyle={{fontWeight: 'bold'}}
              style={{width: '25%'}}>
              Trending
            </Button>
          </View>
          <View style={styles.dietView}>
            <FlatList
              data={data.diets}
              renderItem={({item}) => (
                <Chip mode="outlined" style={{marginHorizontal: 5}}>
                  {item}
                </Chip>
              )}
              horizontal
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.instructionsView}>
            <Text style={styles.instructions}>INSTRUCTIONS</Text>
            <View>
              {data.analyzedInstructions[0] ? (
                data.analyzedInstructions[0].steps.map(item => (
                  <View key={item.number} style={styles.instructView}>
                    <Text style={styles.itemNumber}>{item.number}</Text>
                    <Text style={styles.instruct}>{item.step}</Text>
                  </View>
                ))
              ) : (
                <View>
                  <Text style={{fontSize: 20}}>Instructions not available</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  detailView: {
    paddingHorizontal: '6%',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '70%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dietView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  mainImg: {
    width: '100%',
    height: 400,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  instructions: {
    fontSize: 24,
    color: 'grey',
    fontWeight: 'bold',
  },
  instructionsView: {
    marginVertical: 20,
  },
  instruct: {
    fontSize: 18,
    width: '94%',
  },
  instructView: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  itemNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 20,
    width: '5%',
  },
});
