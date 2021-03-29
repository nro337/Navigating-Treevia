import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { material } from 'react-native-typography';
import { human } from 'react-native-typography';
import { DarkTheme } from '@react-navigation/native';
// import { Metrics } from '../Themes';

export default function DetailsScreen({ navigation, route }) {

  const { myParam } = route.params;
  const { colors } = DarkTheme;

  return (
    <View>
      <View style={styles.treeImageContainer}>
        <Image source={{ uri: myParam.http_image_url }} style={styles.treeImage} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title1}>{myParam.common_name}</Text>
        <View style={styles.sciNameContainer}>
          <Text style={styles.body_}>Scientific Name: </Text>
          <Text style={styles.headline}>{myParam.scientific_name}</Text>
        </View>
        <View style={styles.sciNameContainer}>
          <Text style={styles.body_}>Family: </Text>
          <Text style={styles.headline}>{myParam.family}</Text>
        </View>
        <View style={styles.sciNameContainer}>
          <Text style={styles.body_}>Genus: </Text>
          <Text style={styles.headline}>{myParam.genus}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  treeImageContainer: {
    borderRadius: 20,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  treeImage: {
    borderRadius: 30,
    borderWidth: 1,
    width: 200,
    height: 200,
    //resizeMode: 'contain'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  treeName: {
    //fontSize: human.title2,
    color: 'black',
  },
  sciNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sciName: {
    fontWeight: '700'
  },
  backTextWhite: {
    color: '#FFF',
  },
  title1: {
    ...human.title1,
    color: DarkTheme.colors.text
  },
  body_: {
    ...human.body,
    color: DarkTheme.colors.text
  },
  headline: {
    ...human.headline,
    color: DarkTheme.colors.text
  },
});