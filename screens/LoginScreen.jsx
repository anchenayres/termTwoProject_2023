import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Alert, Button, TouchableOpacity, ActivityIndicator } from 'react-native';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const logOn =() => {
        setLoading(true)
        if(!email || !password) {
            Alert.alert("Try again", "Please Fill in your Email and Password", [
                {text: "Thanks", onPress:() => {setLoading(false)}}
            ])

        } else {
            setLoading(true)
            Alert.alert("You're in", "You have successfully logged in", [
                {text: "Thanks", onPress:() => {setLoading(false)}}
            ])
        }
    }



    return (

        //{{uri: ""}} if you want to add a url link
        <View style={styles.container}> 
            <Image style={styles.logo} source={require("../assets/logo/logo.png")} />
            <Text style={styles.heading}>Login</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
            style={styles.input} 
            keyboardType='email-address'
            placeholder='john@gmail.com' 
            defaultValue={email}
            onChangeText={newValue => setEmail(newValue)} />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
            style={styles.input} 
            keyboardType='email-address'
            placeholder='secret password' 
            defaultValue={password}
            secureTextEntry={true}
            onChangeText= {newValue => setPassword(newValue)} />
    
    {!loading ?  (
        <View>
            <TouchableOpacity style={styles.submitButton} onPress={logOn}>
                <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>


        <Button title='Need an account?' color={'black'} onPress={() => navigation.navigate('Register')}/>

        </View>
    ):  <ActivityIndicator animating={loading} size={40} />}
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo:{
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain'
    },
    heading: {
        fontSize: 21,
        textAlign: 'center'
    },
    inputLabel: {
        fontSize: 12,
        marginTop: 20,
        marginBottom: 5,
        paddingLeft: 5
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    submitButton:{
        backgroundColor: 'black',
        marginTop: 30,
        padding: 15,
        borderRadius: 5,
        marginBottom: 20
    },
    submitButtonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'

    }
})