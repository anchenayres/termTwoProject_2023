import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompetitionScreen from '../screens/CompetitionScreen';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const ProfileTab = () => {
return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerStyle:{
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 26,
                paddingBottom: 10, 
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Profiles') {
                    iconName = focused
                    ? 'list-circle'
                    : 'list-circle-outline';
                } else if (route.name === Profile) {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTint: 'black',
            tabBarInactiveTintColor: 'gray',
        })}>


    <Tab.Screen
        name='Profiles'
        component={CompetitionScreen}
        options={{
            title: 'All Profiles',
            headerRight: () => (
                <Pressable
                    style={StyleSheet.logOutButton}
                    onPress={() => signOutUser()}>
                    <Ionicons
                        name='exit-outline'
                        size={28}
                        color='white'/>
                </Pressable>
    )}}/>


    
        
    </Tab.Navigator>
)
}

export default ProfileTab