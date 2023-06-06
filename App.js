import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import RegisterSceen from './screens/RegisterScreen'
import ProjectScreen from './screens/ProjectScreen'
import ProfileScreen from './screens/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

  const Drawer = createDrawerNavigator();

  //TODO: setup navigation here
  //TODO: check if user is logged in

  return (

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="LoginScreen" component={LoginScreen}>
    //     <Drawer.Screen name='Profile' component={ProfileScreen}/>
    //     <Drawer.Screen name='Project' component={ProjectScreen}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <SafeAreaView>
      {/* <StatusBar />
      <ProfileScreen /> */}
      <LoginScreen/>
    </SafeAreaView>
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
