import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import LoginScreen from './screens/LoginScreen'
import RegisterSceen from './screens/RegisterScreen'
import ProjectScreen from './screens/ProjectScreen'
import ProfileScreen from './screens/ProfileScreen'
import CompetitionScreen from './screens/CompetitionScreen';
import ViewProfileScreen from './screens/ViewProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';

export default function App() {

  // const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  const loggedIn = false

  return (

    // Route for navigation

    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' >
          {!loggedIn ?(
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterSceen} />
          </>
          ): (
          <>
          <Stack.Screen name='Profile' component={ProfileScreen} />
          <Stack.Screen 
          name='Competitions' 
          component={CompetitionScreen} 
          options={({route}) => ({
            headerShown: true,
            title: route.params.project.title
          })}/>
          </>
          )}
        </Stack.Navigator>
    </NavigationContainer>

  );
}
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="LoginScreen" >
    //     <Drawer.Screen name='Profile' component={ProfileScreen}/>
    //     <Drawer.Screen name='Login' component={LoginScreen}/>
    //     <Drawer.Screen name='Competitions' component={CompetitionScreen}/>
    //     <Drawer.Screen name='ViewProfile' component={ViewProfileScreen}/>
    //     <Drawer.Screen name='register' component={RegisterSceen}/>


    //   </Drawer.Navigator>
    // </NavigationContainer>




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
