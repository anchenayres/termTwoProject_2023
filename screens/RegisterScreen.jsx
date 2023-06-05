import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from "../utils/GlobalStyles";

const RegisterScreen = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (

        //{{uri: ""}} if you want to add a url link
        <View style={globalStyles.container}> 
            <Image style={globalStyles.logo} source={require("../assets/logo/logo.png")} />
            <Text style={globalStyles.heading}>Register</Text>

            <Text style={globalStyles.inputLabel}>Username</Text>
            <TextInput 
            style={globalStyles.input} 
            keyboardType='default'
            placeholder='Emily Hunt' 
            defaultValue={username}
            onChangeText={newValue => setUsername(newValue)} />


            <Text style={globalStyles.inputLabel}>Email</Text>
            <TextInput 
            style={globalStyles.input} 
            keyboardType='email-address'
            placeholder='emily@gmail.com' 
            defaultValue={email}
            onChangeText={newValue => setEmail(newValue)} />

            <Text style={globalStyles.inputLabel}>Password</Text>
            <TextInput 
            style={globalStyles.input} 
            keyboardType='default'
            placeholder='at least 6 characters' 
            defaultValue={password}
            secureTextEntry={true}
            onChangeText= {newValue => setPassword(newValue)} />

            <TouchableOpacity style={globalStyles.submitButton}>
                <Text style={globalStyles.submitButtonText}>Next</Text>
            </TouchableOpacity>

        <Button title='Already have an account?' color={'black'} />
        </View>
    )
}

export default RegisterScreen

