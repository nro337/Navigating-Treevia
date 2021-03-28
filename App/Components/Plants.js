import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image, Dimensions, RefreshControl, Button } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors, Images } from '../Themes'
import * as WebBrowser from 'expo-web-browser';
import { SwipeListView } from 'react-native-swipe-list-view';

import DetailsScreen from '../../Screens/DetailsScreen';

const Item = ({ http_image_url, common_name, family, scientific_name, genus }) => (

  <View style={styles.container}>
    <View style={styles.treeImageContainer}>
      <Image source={{ uri: http_image_url }} style={styles.treeImage} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={human.title2}>{common_name}</Text>
      <View style={styles.sciNameContainer}>
        <Text style={human.body}>Scientific Name: </Text>
        <Text style={human.headline}>{scientific_name}</Text>
      </View>
      <View style={styles.sciNameContainer}>
        <Text style={human.body}>Family: </Text>
        <Text style={human.headline}>{family}</Text>
      </View>
      <View style={styles.sciNameContainer}>
        <Text style={human.body}>Genus: </Text>
        <Text style={human.headline}>{genus}</Text>
      </View>
    </View>
  </View>

);

const renderItem = ({ item, navigation }) => {
  // Pass params here for details screen
  // async () => await WebBrowser.openBrowserAsync(item.http_image_url)
  return <TouchableOpacity onPress={() => navigation.navigate('List'), {myParams: item}}>
    <Item common_name={item.common_name} family={item.family} url={item.http_image_url} scientific_name={item.scientific_name} genus={item.genus} http_image_url={item.http_image_url} key={item.key} />
  </TouchableOpacity>;
};

const _handlePressButtonAsync = async () => {
  await WebBrowser.openBrowserAsync(renderItem);
  //setResult(result);
};

export default function Plants(props, navigation) {
  const [result, setResult] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    props.loadPlant(props.value);
    setRefreshing(false);
    //wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderHiddenItem = ({item}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow({item})}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteRow = ({data, item}) => {
    props.plants.forEach(element => {
      if (element.key === item.key) {
        const num = props.plants.indexOf(element);
        var arr = [];
        arr = props.plants
        arr.forEach(element1 => {
          if (element1.key === item.key) {
            arr.splice(num, 1)
            props.setPlants(arr)
            //arr[num+1].closeRow()
          }
        });
        

        //loadPlant()
        //props.plants[num].closeRow()
        //props.plants[renderItem].closeRow()
        //props.plants[element.key].closeRow()
      }
    });

    // console.log(props.plants)
    // console.log(item.common_name)
    // if (props.plants.includes(item)) {
    //   console.log(item);
    //   props.plants.closeRow()
    //  // props.plants[item.key].closeRow();
    // }
  };

  return (
    // <View style={styles.flatList}>
    //   {/* FlatList or SectionList */}
    //   <SwipeListView
    //     data={props.plants}
    //     renderItem={renderItem}
    //     keyExtractor={props.keyExtractor}
    //     refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
    //     //initialNumToRender={5}
    //   // result={result}
    //   />
    // </View>
    <View style={styles.flatList}>
      {/* FlatList or SectionList */}
      <SwipeListView
        useFlatList={true}
        data={props.plants}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={props.keyExtractor}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        //initialNumToRender={5}
        // result={result}
        leftOpenValue={0}
        rightOpenValue={-75}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // create styles as necessary 
  container: {
    height: 100,
    width: Dimensions.get("screen").width,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
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
  treeImageContainer: {
    borderRadius: 20,
    margin: 10
  },
  treeImage: {
    borderRadius: 30,
    borderWidth: 1,
    width: 60,
    height: 60,
    //resizeMode: 'contain'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
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

});
