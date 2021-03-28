import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
// import { Metrics } from '../Themes';

import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function SettingsScreen({ navigation }) {

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [selectedFlowerColor, setSelectedFlowerColor] = useState();
  const [selectedFruitColor, setSelectedFruitColor] = useState();

  return (
    <View style={styles.container}>
      <CheckBox title="Vegetable" checked={state} onPress={() => state ? setState(false) : setState(true)} />
      <CheckBox title="Edible" checked={state2} onPress={() => state2 ? setState2(false) : setState2(true)} />
      <View style={styles.pickerContainer}>
        <Text style={{fontSize: 30}}>Flower Color</Text>
      </View>
      <Picker
        style={{marginTop: 0}}
        selectedValue={selectedFlowerColor}
        onValueChange={(itemValue, itemIndex) => { setSelectedFlowerColor(itemValue), console.log(itemValue) }}
      >
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Red" value="red" />
      </Picker>
      <View style={styles.pickerContainer}>
        <Text style={{fontSize: 30}}>Fruit Color</Text>
      </View>
      <Picker
        style={{marginTop: 0}}
        selectedValue={selectedFruitColor}
        onValueChange={(itemValue, itemIndex) => { setSelectedFruitColor(itemValue), console.log(itemValue) }}
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