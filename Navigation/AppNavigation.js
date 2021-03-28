import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import { Colors } from '../App/Themes'
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import PlantsScreen from '../Screens/PlantsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import DetailsScreen from '.././Screens/DetailsScreen';
import Plants from '../App/Components/Plants'

import { Ionicons } from '@expo/vector-icons';

// const PlantStack = createStackNavigator();
// function PlantStackComponent() {
//   return (
//     <PlantStack.Navigator headerMode="float" screenOptions={{headerStyle: {backgroundColor: "red"}}}>
//       <PlantStack.Screen name="PlantsScreen" component={PlantsScreen} options={{title: "Listings"}}/>
//       <PlantStack.Screen name="DetailsScreen" component={DetailsScreen} options={{title: "Details"}}/>
//     </PlantStack.Navigator>
//   );
// }

// const SettingsStack = createStackNavigator();
// function SettingsStackComponent() {
//   return (
//     <SettingsStack.Navigator headerMode="float">
//       <SettingsStack.Screen name="PlantsScreen" component={PlantsScreen} />
//       <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.screenContainer}>
//       <Text style={styles.screenText}>Home!</Text>
//       <Button title="Go to Settings Tab" onPress={() => navigation.navigate('Settings')} />
//     </View>
//   );
// }

// const TabNav = createBottomTabNavigator();
// export default function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <TabNav.Navigator
//         initialRouteName='Plants'
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Plants') {
//               iconName = focused ? 'leaf' : 'leaf-outline';
//               //console.log("Plants")
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//               //console.log('Settings')
//             }

//             // You can return any component that you like here!
//             // return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
//             return <Ionicons name={iconName} size={size} color={color} />
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "green",
//           showLabel: true,
//           safeAreaInsets: {
//             bottom: 30
//           }
//         }}>
//         <TabNav.Screen name="Plants" component={PlantStackComponent} />
//         <TabNav.Screen name="Settings" component={SettingsStackComponent} />

//       </TabNav.Navigator>
//     </NavigationContainer>
//   );
// }

// const Styles = StyleSheet.create({
//     navContainer: {
//       paddingBottom: 10,
//     }
// });

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PlantsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "white"},
      }}
    >
        <Stack.Screen name="Home" component={PlantsScreen} options={{title: "Home"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'leaf' : 'leaf-outline';
              //console.log("Plants")
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
              //console.log('Settings')
            }

            // You can return any component that you like here!
            // return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        // tabBar={PlantsScreen}
        tabBarOptions={{
          activeTintColor: "green",
          showLabel: true,
          safeAreaInsets: {
            bottom: 30
          }
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}