import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { material } from 'react-native-typography';
import { DarkTheme } from '@react-navigation/native';
// import { Metrics } from '../Themes';

import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function SettingsScreen({ navigation }) {

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [selectedFlowerColor, setSelectedFlowerColor] = useState();
  const [selectedFruitColor, setSelectedFruitColor] = useState();
  useEffect(() => {
    readVegetableState();
    // console.log(state);
  }, [])

  const {colors} = DarkTheme;

  const setVegetableStateFromStorage = (boolean) => {
    setState(JSON.parse(boolean));
  }

  const storeVegetableState = async (newBool) => {
    try {
      await AsyncStorage.setItem('state', JSON.stringify(newBool))
    } catch(e) {
      console.error(e);
    }
  }

  const readVegetableState = async () => {
    try {
      const storage_state = await AsyncStorage.getItem('state');
      if (storage_state !== null) {
        setVegetableStateFromStorage(storage_state);
        console.log(state)
      }
    } catch(e) {
      console.error(e);
    }
  }

  const addVegetableState = () => {
    //setState(state)
    // if (state) {
    //   setState(false)
    // } else {
    //   setState(true)
    // }
    state ? setState(false) : setState(true)
    storeVegetableState(state);
    
    //console.log(state);
  }

  return (
    <View style={styles.container}>
      {/* <CheckBox title="Vegetable" checked={state} onPress={() => state ? setState(false) : setState(true)} /> */}
      <CheckBox title="Vegetable" checked={state} onPress={addVegetableState} />
      <CheckBox title="Edible" checked={state2} onPress={() => state2 ? setState2(false) : setState2(true)} />
      <View style={styles.pickerContainer}>
        <Text style={{fontSize: 30, color: colors.primary}}>Flower Color</Text>
      </View>
      <Picker
        style={{marginTop: 0}}
        selectedValue={selectedFlowerColor}
        onValueChange={(itemValue, itemIndex) => { setSelectedFlowerColor(itemValue), console.log(itemValue) }}
        itemStyle={{color: "beige"}}
      //style={{backgroundColor: "gray"}}
      >
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Red" value="red" />
      </Picker>
      <View style={styles.pickerContainer}>
        <Text style={{fontSize: 30, color: colors.primary}}>Fruit Color</Text>
      </View>
      <Picker
        style={{marginTop: 0}}
        selectedValue={selectedFruitColor}
        onValueChange={(itemValue, itemIndex) => { setSelectedFruitColor(itemValue), console.log(itemValue) }}
        itemStyle={{color: "beige"}}
      >
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Red" value="red" />
      </Picker>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center'
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});