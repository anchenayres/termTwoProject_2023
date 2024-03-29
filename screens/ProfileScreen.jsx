import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Alert, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import ProjectScreen from "./ProjectScreen";

const ProfileScreen = () => {

    const [selected, setSelected] = useState('');

    const data = () => [
        {key: '1', value: 'Female'},
        {key: '2', value: 'Male'},
        {key: '3', value: 'Other'}
    ]

    const categories = () => [
        {key: '1', value: 'Runway'},
        {key: '2', value: 'Swimsuit'},
        {key: '3', value: 'Lingerie'},
        {key: '4', value: 'Editorial'}

    ]
    
    const logIn = () => {
        if(save === 'value'){
            setSelected(value);
        } else {
            setSelected(key)
        }

    }
    

    return (

        //{{uri: ""}} if you want to add a url link
        <View style={styles.container} > 
            <Image style={styles.logo} source={require("../assets/modelLogo.png")} />
            <Text style={styles.heading}>Set up your Profile</Text>

        <Text style={styles.appearHeading}>Appearance</Text>

            <SelectList style={styles.genderList}
            boxStyles={{borderRadius:10}} 
                setSelected={(val)=> setSelected(val)}
                placeholder="Select Gender"
                data={data}
                save="value"
                
                />

            <TextInput style={styles.one} 
            placeholder='Age'
            />
            <TextInput style={styles.two} 
            placeholder='Hair Colour'
            />

            <TextInput style={styles.three} 
            placeholder='Eye Colour'
            />
            <TextInput style={styles.four} 
            placeholder='Height (cm)'
            />
            <TextInput style={styles.five} 
            placeholder='Bust (cm)'
            />
            <TextInput style={styles.six} 
            placeholder='Waist (cm)'
            />

        <Text style={styles.genHeading}>General</Text>

            <TextInput style={styles.five} 
                placeholder='Current Agency'
            />
                <TextInput style={styles.six} 
                placeholder='Languages'
            />

        <Text style={styles.genHeading}>Categories</Text>

            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={categories} 
                save="value"
                label="Categories"
            />


        <View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText} onPress={ProjectScreen}>Done</Text>
            </TouchableOpacity>

        <Button title='Need an account?' color={'black'} />

        </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    SelectList:{
        width: 20,
        height: 20,
    },
    logo:{
        height: 200,
        width: 200,
        alignSelf: 'center',
        resizeMode: 'contain',

    },
    heading: {
        fontSize: 21,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: -80,
    },
    appearHeading:{
        marginBottom: 20,
    },
    genHeading:{
        marginTop: 20,
    },

    inputLabel: {
        fontSize: 12,
        marginTop: 20,
        marginBottom: 5,
        paddingLeft: 5
    },
    topInputs:{
        alignItems: "row", 
    },
    genderInput: {
        height: 40,
        width: 150,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    ageInput: {
        height: 40,
        width: 150,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    secondInput:{
        flexDirection: 'row',
    },
    one:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop:20,
    },
    two:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop: -42,
        marginLeft: 210,
    },
    three:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop: 10,
  
    },
    four:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop: -40,
        marginLeft: 210,
    },
    five:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop: 10,
  
    },
    six:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 180,
        padding: 10,
        marginTop: -40,
        marginLeft: 210,
    },
    seven:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 390,
        height: 100,
        padding: 10,
        marginTop: 10,
  
    },



    submitButton:{
        backgroundColor: 'pink',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    submitButtonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'

    }
})