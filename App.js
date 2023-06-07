import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import RegisterSceen from './screens/RegisterScreen'
import ProjectScreen from './screens/ProjectScreen'
import ProfileScreen from './screens/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompetitionScreen from './screens/CompetitionScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const Drawer = createDrawerNavigator();

  //TODO: setup navigation here
  //TODO: check if user is logged in

  return (

    //Route for navigation
    // <NavigationContainer>
    //   <SafeAreaView>
    //     <Stack.Navigator initialRouteName='Login'>
    //       <Stack.Screen name='Login' component={LoginScreen} />
    //       <Stack.Screen name='Register' component={RegisterSceen} />
    //     </Stack.Navigator>
    //   </SafeAreaView>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen" component={LoginScreen}>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Project' component={ProjectScreen}/>
        <Drawer.Screen name='Competitions' component={CompetitionScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>

    // <SafeAreaView>
      // {/* <StatusBar />
      // <ProfileScreen /> */}
      // <LoginScreen/>
    // </SafeAreaView>
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
