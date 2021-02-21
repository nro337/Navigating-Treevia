import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import Plants from './App/Components/Plants'
import Search from './App/Components/Search'

export default function App() {

  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);

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
    console.log(results);
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        Have fun!{'\n\n'}
        Start by creating an API key in "./App/Config/AppConfig.js".{'\n\n'}
        Take a look at the following components:{'\n'}
        "./App/Components/Plants.js"{'\n'}
        "./App/Components/Search.js"
      </Text>

      {/* First, the logo */}

      {/* Then the search bar */}

      {/* And some plants */}

      {/* You can style and organize these however you want */}

      {/* Also, checkout the "./App/Config/APIRequest.js", if you want custom API calls or use test data*/}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
