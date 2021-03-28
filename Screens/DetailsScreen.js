import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
// import { Metrics } from '../Themes';

export default function DetailsScreen({ navigation, route }) {

  const { myParam } = route.params;

  return (
    <View>
      <Text>{myParam}</Text>
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