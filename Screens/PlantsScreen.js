import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image, Dimensions } from 'react-native';
import { human } from 'react-native-typography'
import { DarkTheme } from '@react-navigation/native';
import APIRequest from '../App/Config/APIRequest'
//import { material } from 'react-native-typography';
//import { Metrics } from '../Themes';

import Plants from '../App/Components/Plants';
import Search from '../App/Components/Search';
import DetailsScreen from './DetailsScreen';
import colors from '../App/Themes/Colors';


export default function PlantsScreen({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  const [text, setText] = useState('');

  const { colors } = DarkTheme;

  const renderItem = ({ item }) => {
    // Pass params here for details screen
    // async () => await WebBrowser.openBrowserAsync(item.http_image_url)
    return <TouchableOpacity onPress={() => navigation.navigate('Details', {myParam: item})}>
      <Item common_name={item.common_name} family={item.family} url={item.http_image_url} scientific_name={item.scientific_name} genus={item.genus} http_image_url={item.http_image_url} key={item.key} />
    </TouchableOpacity>;
  };

  const Item = ({ common_name }) => (

    <View style={styles.container}>
      <Text style={styles.listTitle}>{common_name}</Text>
    </View>
  
  );

  // retrieve lists of plants
  const loadPlants = async (plantSearch = '', plantFilter = '') => {
    setLoading(true);
    setPlants([]);
    let results = [];
    // if there is no search term, then get list of plants
    if (plantSearch !== '') {
      results = await APIRequest.requestSearchPlants(plantSearch);
    } else {
      results = await APIRequest.requestPlantList(plantFilter);
    }
    //console.log(results);
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);

  const List = ({ error, loading }) => {
    let content;

    if (error) {
      content = <Plants plants={plants} keyExtractor={(item) => { return item['key'] }} />
    } else if (loading === true) {
      content = <View style={styles.activityContainer}><ActivityIndicator style={styles.activityIndicator} size="large" color="white" /></View>
    } else {
      content =
        <View style={{ flexDirection: 'column' }}>
          <Plants plants={plants} keyExtractor={(item) => { return item['key'] }} loadPlant={() => loadPlants(text)} value={text} setPlants={item => setPlants(item)} renderItem={renderItem} />
        </View>

      
      //content = <Plants plants={plants} keyExtractor={(item) => {return item['key']}} loadPlant={() => loadPlants(text)} value={text} setPlants={item => setPlants(item)}/>
    }

    return <View>{content}</View>
  }

  return (
    <View>
      <Search value={text} onChangeText={text => setText(text)} loadPlant={() => loadPlants(text)} />
      <List loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get("screen").width,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flatList: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("window").height,
    backgroundColor: "green",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  listTitle: {
    ...human.largeTitle,
    color: colors.text
  }
});