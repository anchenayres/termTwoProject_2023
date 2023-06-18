import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import {auth} from './utils/firebase'

import LoginScreen from './screens/LoginScreen'
import RegisterSceen from './screens/RegisterScreen'
import ProjectScreen from './screens/ProjectScreen'
import ProfileScreen from './screens/ProfileScreen'
import CompetitionScreen from './screens/CompetitionScreen';
import ViewProfileScreen from './screens/ViewProfileScreen';
import HomeTab from './navigators/HomeTab';
import ProfileTab from './navigators/ProfileTab';
import CompetitionEntryScreen from './screens/CompetitionEntryScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

  const Stack = createNativeStackNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() =>{

    const unsubscribed = onAuthStateChanged(auth, (user) => {

      if(user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
    return unsubscribed;
  }, [])

  return (

    // Route for navigation

    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{headerShown: false}}>

          {!loggedIn ?(
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterSceen} />
            
          </>
          ): (
          <>
          <Stack.Screen name='Home' component={HomeTab} />
          <Stack.Screen name='Profile' component={ProfileTab} />

          <Stack.Screen name='Add' component={CompetitionEntryScreen} options={{headerShown: true, title: "Add a new Competition"}}/>

          <Stack.Screen 
          name='Competitions' 
          component={HomeTab} 
          options={({route}) => ({
            headerShown: true,
            title: route.params.project.title
          })}/>

          <Stack.Screen 
          name='Profiles' 
          component={ProfileTab} 
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
