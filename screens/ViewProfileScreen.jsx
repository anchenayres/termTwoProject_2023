import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Alert, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import ProjectScreen from "./ProjectScreen";

const ViewProfileScreen = () => {    

    return (

        <View>
        <Image style={styles.logo} source={require("../assets/modelLogo.png")} />

        </View>
    )
}

export default ViewProfileScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

})