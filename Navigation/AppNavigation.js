import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import { Colors } from '../App/Themes'
import { StyleSheet, Image, Text } from 'react-native';
import PlantsScreen from '../Screens/PlantsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import DetailsScreen from '.././Screens/DetailsScreen';

import { Ionicons } from '@expo/vector-icons';

const PlantStack = createStackNavigator();
function PlantStackComponent() {
  return (
    <PlantStack.Navigator headerMode="float">
      <PlantStack.Screen name="PlantsScreen" component={PlantsScreen} />
      <PlantStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </PlantStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackComponent() {
  return (
    <SettingsStack.Navigator headerMode="float">
      <SettingsStack.Screen name="PlantsScreen" component={PlantsScreen} />
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

// const BookmarkStack = createStackNavigator();
// function BookmarkStackComponent () {
//   return (
//     <BookmarkStack.Navigator headerMode="float">
//       <BookmarkStack.Screen name = "Bookmark" component = {BookmarkScreen}/>
//       <BookmarkStack.Screen name = "BookmarkViewer" component = {BookmarkViewerScreen}/>
//     </BookmarkStack.Navigator>
//   );
// }


const TabNav = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='Plants'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Plants') {
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
        tabBarOptions={{
          activeTintColor: "green",
          showLabel: true,
          safeAreaInsets: {
            bottom: 30
          }
        }}>
        <TabNav.Screen name="Plants" component={PlantStackComponent} />
        <TabNav.Screen name="Settings" component={SettingsStackComponent} />

      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
    navContainer: {
      paddingBottom: 10,
    }
});