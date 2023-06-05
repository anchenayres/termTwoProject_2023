import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import RegisterSceen from './screens/RegisterScreen'
import ProjectScreen from './screens/ProjectScreen'
import ProfileScreen from './screens/ProfileScreen'

export default function App() {

  //TODO: setup navigation here
  //TODO: check if user is logged in

  return (
    <SafeAreaView>
      <StatusBar />
      <ProfileScreen />
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
