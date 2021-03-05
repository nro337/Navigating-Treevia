import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'
import { Dimensions } from 'react-native'


export default function Search(props) {
	// const [text, setText] = useState('');

	// const loadPlant = () => {
	// 	{props.loadPlant}
	// 	setText('')
	// 	//loadPlant()
	// 	//setText('')
	// };

	//this.textInput = React.createRef();

	const update = async () => {
		await props.loadPlant(text)
		setText('')
		Keyboard.dismiss()
		//this.textInput.clear()
		//textInput.clear();

	}

	const clear = async () => {
		setText('')
		await props.loadPlant('')
		
	}

	const [text, setText] = useState('');

	return (
		<View>
			<SearchBar
				style={styles.searchBar}
				placeholder="Search for a plant"
				value={props.value}
				//value={text}
				onChangeText={props.onChangeText}
				//onChangeText={text => setText(text)}
				platform={Platform.OS}
				onSubmitEditing={update}
				//onSubmitEditing={() => props.loadPlant(text)}
			    //ref={textInput => this.textInput = textInput}
				onCancel={clear}
				onClear={() => setText('')}
				containerStyle={styles.containerStyle}
				inputContainerStyle={{backgroundColor: "#edebeb"}}
			/>
		</View>
	)

}

//Passing Data betwn components
//Each time search is completed, retrieve data from API (loadPlant)
//Find way to pass loadPlant as a callback function so that when the user makes a search, 
//extract search from textfield, then pass that text into the location of 'plantSearch' from within loadPlant()

//loadplant as a prop
//const text,
//onClick = () => prop.loadPlants(searchPlant=text)

const styles = StyleSheet.create({
	// create styles as necessary	
	searchBar: {
		width: '100%'
	},
	containerStyle: {
		width: "100%"
	}

});
