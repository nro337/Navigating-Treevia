import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import APIRequest from '../App/Config/APIRequest'
//import { material } from 'react-native-typography';
//import { Metrics } from '../Themes';

import Plants from '../App/Components/Plants';
import Search from '../App/Components/Search';

export default function PlantsScreen({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [plants, setPlants] = useState([]);
    const [text, setText] = useState('');

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

    const List = ({error, loading}) => {
      let content;
  
      if(error) {
        content = <Plants plants={plants} keyExtractor={(item) => {return item['key']}} />
      } else if(loading === true){
        content = <View style={styles.activityContainer}><ActivityIndicator style={styles.activityIndicator} size="large" color="white" /></View>
      }else {
        content = 
        <View style={{flexDirection: 'column'}}>
          <Search value={text} onChangeText={text => setText(text)} loadPlant={() => loadPlants(text)} />
          <Plants plants={plants} keyExtractor={(item) => {return item['key']}} loadPlant={() => loadPlants(text)} value={text} setPlants={item => setPlants(item)}/>
        </View>
        
        //content = <PlantsScreen />
        //content = <Plants plants={plants} keyExtractor={(item) => {return item['key']}} loadPlant={() => loadPlants(text)} value={text} setPlants={item => setPlants(item)}/>
      }
  
      return <View>{content}</View>
    }

  return (
    <View style={styles.container}>
      <Text style={{flexShrink: 1}}>
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      /> */}
      {/* <Plants /> */}
      
      </Text>
      
      <List loading={loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
    paddingBottom: 20
  },
});