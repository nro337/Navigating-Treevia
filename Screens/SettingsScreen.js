import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { material } from 'react-native-typography';
import { DarkTheme } from '@react-navigation/native';
// import { Metrics } from '../Themes';

import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function SettingsScreen({ navigation }) {
  //AsyncStorage.clear()
  const [state, setState] = useState(state);
  const [state2, setState2] = useState(state2);
  const [selectedFlowerColor, setSelectedFlowerColor] = useState(selectedFlowerColor);
  const [selectedFruitColor, setSelectedFruitColor] = useState(selectedFruitColor);
  useEffect(() => {
    readVegetableState();
    // console.log(state);
  }, [])

  const { colors } = DarkTheme;

  const setVegetableStateFromStorage = (boolean) => {
    setState(JSON.parse(boolean));
  }

  const storeVegetableState = async (newBool) => {
    try {
      await AsyncStorage.setItem('state', JSON.stringify(newBool))
    } catch (e) {
      console.error(e);
    }
  }

  const readVegetableState = async () => {
    try {
      const storage_state = await AsyncStorage.getItem('state');
      if (storage_state !== null) {
        setVegetableStateFromStorage(storage_state);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const addVegetableState = () => {

    const e = state

    if (e === undefined) {
      setState(true)
      storeVegetableState(true)
    } if (e === false) {
      setState(true)
      storeVegetableState(true)
    } if (e === true) {
      setState(false)
      storeVegetableState(false)
    }
  }

  // -----------------------------------------------------------------------------------

  useEffect(() => {
    readEdibleState();
    // console.log(state);
  }, [])

  const setEdibleStateFromStorage = (boolean) => {
    setState2(JSON.parse(boolean));
  }

  const storeEdibleState = async (newBool) => {
    try {
      await AsyncStorage.setItem('state2', JSON.stringify(newBool))
    } catch (e) {
      console.error(e);
    }
  }

  const readEdibleState = async () => {
    try {
      const storage_state = await AsyncStorage.getItem('state2');
      if (storage_state !== null) {
        setEdibleStateFromStorage(storage_state);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const addEdibleState = () => {

    const e = state2

    if (e === undefined) {
      setState2(true)
      storeEdibleState(true)
    } if (e === false) {
      setState2(true)
      storeEdibleState(true)
    } if (e === true) {
      setState2(false)
      storeEdibleState(false)
    }
  }

  // -----------------------------------------------------------------------------------------------
  useEffect(() => {
    readSelectedFlowerColorState();
    // console.log(state);
  }, [])

  const setSelectedFlowerColorStateFromStorage = (boolean) => {
    setSelectedFlowerColor(JSON.parse(boolean));
  }

  const storeSelectedFlowerColorState = async (newBool) => {
    try {
      await AsyncStorage.setItem('selectedFlowerColor', JSON.stringify(newBool))
    } catch (e) {
      console.error(e);
    }
  }

  const readSelectedFlowerColorState = async () => {
    try {
      const storage_state = await AsyncStorage.getItem('selectedFlowerColor');
      if (storage_state !== null) {
        setSelectedFlowerColorStateFromStorage(storage_state);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const addSelectedFlowerColorState = (itemValue, itemIndex) => {

    setSelectedFlowerColor(itemValue)
    storeSelectedFlowerColorState(itemValue)
  }

  //  -----------------------------------------------------------------------------------------------------


  useEffect(() => {
    readSelectedFruitColorState();
    // console.log(state);
  }, [])

  const setSelectedFruitColorStateFromStorage = (boolean) => {
    setSelectedFruitColor(JSON.parse(boolean));
  }

  const storeSelectedFruitColorState = async (newBool) => {
    try {
      await AsyncStorage.setItem('selectedFruitColor', JSON.stringify(newBool))
    } catch (e) {
      console.error(e);
    }
  }

  const readSelectedFruitColorState = async () => {
    try {
      const storage_state = await AsyncStorage.getItem('selectedFruitColor');
      if (storage_state !== null) {
        setSelectedFruitColorStateFromStorage(storage_state);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const addSelectedFruitColorState = (itemValue, itemIndex) => {

    setSelectedFruitColor(itemValue)
    storeSelectedFruitColorState(itemValue)
  }

  return (
    <View style={styles.container}>
      {/* <CheckBox title="Vegetable" checked={state} onPress={() => state ? setState(false) : setState(true)} /> */}
      <CheckBox title="Vegetable" checked={state} onPress={addVegetableState} />
      <CheckBox title="Edible" checked={state2} onPress={addEdibleState} />
      <View style={styles.pickerContainer}>
        <Text style={{ fontSize: 30, color: colors.primary }}>Flower Color</Text>
      </View>
      <Picker
        style={{ marginTop: 0 }}
        selectedValue={selectedFlowerColor}
        onValueChange={(itemValue, itemIndex) => { addSelectedFlowerColorState(itemValue, itemIndex) }}
        itemStyle={{ color: "beige" }}

      //style={{backgroundColor: "gray"}}
      >
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Red" value="red" />
      </Picker>
      <View style={styles.pickerContainer}>
        <Text style={{ fontSize: 30, color: colors.primary }}>Fruit Color</Text>
      </View>
      <Picker
        style={{ marginTop: 0 }}
        selectedValue={selectedFruitColor}
        onValueChange={(itemValue, itemIndex) => { addSelectedFruitColorState(itemValue, itemIndex) }}
        itemStyle={{ color: "beige" }}
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