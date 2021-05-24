import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './src/navigation/stack';

const App = () => {
  return (
    <PaperProvider>
      {/* <SafeAreaView style={styles.container}> */}
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="white" />
        <StackNavigator />
      </View>
      {/* </SafeAreaView> */}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
