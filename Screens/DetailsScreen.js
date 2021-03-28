import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
// import { Metrics } from '../Themes';

export default function DetailsScreen({ navigation, route }) {

  //const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{flexShrink: 1}}>
        <Text>Details screen test</Text>
        {/* <Text>{item}</Text> */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});