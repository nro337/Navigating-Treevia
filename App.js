import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Dimensions, Image } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import Plants from './App/Components/Plants'
import Search from './App/Components/Search'
import { StatusBar } from 'react-native';
import { Platform } from 'react-native';

export default function App() {

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
      content = <Plants plants={plants} keyExtractor={(item) => {return item['key']}} loadPlant={() => loadPlants(text)} value={text} setPlants={item => setPlants(item)}/>
    }

    return <View>{content}</View>
  }


  // if (loading) {
  //   return null;
  // }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {/* <Text style={{textAlign: 'center'}}>
        Have fun!{'\n\n'}
        Start by creating an API key in "./App/Config/AppConfig.js".{'\n\n'}
        Take a look at the following components:{'\n'}
        "./App/Components/Plants.js"{'\n'}
        "./App/Components/Search.js"
      </Text> */}

      {/* First, the logo */}

      {/* Then the search bar */}

      {/* And some plants */}

      {/* You can style and organize these however you want */}

      {/* Also, checkout the "./App/Config/APIRequest.js", if you want custom API calls or use test data*/}
      <View style={styles.containerMain}>
        <View style={styles.navBar}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        <Search value={text} onChangeText={text => setText(text)} loadPlant={() => loadPlants(text)} />
        {/* <Search value={text} onChangeText={text => setText(text)}/> */}
        {/* <Plants plants={plants} keyExtractor={(item) => {return item['key']}} /> */}
        <List loading={loading}/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  containerMain: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "black",
    height: Dimensions.get("window").height,
  },
  navBar: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 120,
        //marginTop: 70,
      },
      android: {
        height: 100,
        //marginTop: 30
      },
      default: {
        paddingTop: "12%"
      }
    }),
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    borderColor: "#C5C5C5"
  },
  logo: {
    // paddingTop: 30,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  activityIndicator: {
    color: "white",
    //size: 'large'
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityContainer: {
    height: Dimensions.get("window").height,
  },
  // statusBar: {
  //   ...Platform.select({
  //     ios: {
  //       barStyle: "dark-content"
  //     },
  //     android: {
  //       barStyle: "light-content"
  //     },
  //     default: {
  //       barStyle: "light-content"
  //     }
  //   })
  // }
});
