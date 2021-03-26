import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
// import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { PlantsScreen } from '../Screens/PlantsScreen';
import { SettingsScreen } from '../Screens/PlantsScreen';

const PlantStack = createStackNavigator();
function PlantStackComponent () {
  return (
    <PlantStack.Navigator headerMode="float">
      <PlantStack.Screen name = "PlantsScreen" component={PlantsScreen} />
      <PlantStack.Screen name = "SettingsScreen" component={SettingsScreen} />
    </PlantStack.Navigator>
  );
}

// const SettingsStack = createStackNavigator();
// function SettingsStackNavigator () {
//   return (
//     <SettingsStack.Navigator headerMode="float">
//       <SettingsStack.Screen name = "SettingsScreen" component={SettingsScreen} />
//       {/* <HomeStack.Screen name = "UserProfile" component={UserProfileScreen} /> */}
//     </SettingsStack.Navigator>
//   );
// }

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
        initialRouteName='PlantsTab'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        
            if (route.name === 'PlantsTab') {
              //iconName = 'home';
              console.log("Plants")
            } else if (route.name === 'SettingsTab') {
              //iconName = 'bookmark';
              console.log('Settings')
            }
        
            // You can return any component that you like here!
            // return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
            return <Text>Nav Text</Text>
          },
        })}
        
        tabBarOptions={{
          activeTintColor: Colors.black,
          showLabel: true,
        }}>
        <TabNav.Screen name="PlantsTab" component={PlantStackComponent} />
        <TabNav.Screen name="SettingsTab" component={SettingsStackComponent} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}