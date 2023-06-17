import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { getCurrentUser } from "../services/firebaseAuth";
import { addCompetitionCollection } from "../services/firebaseDb";

// "add competition screen"
const CompetitionEntryScreen = ({navigation}) => {

    const [title, setTitle] = useState("") 
    const [creator, setCreator] = useState("") //2 March
    const [year, setYear] = useState("")
    const [endDate, setEndDate] = useState("")
    const [descr, setDescr] = useState("")
    const [tech, setTech] = useState("") //runway

    const [loading, setLoading] = useState(false)


    
    const createCompetition = async () =>{

        if(title && creator && year && endDate && descr && tech){

            setLoading(true)
            var personInfo = getCurrentUser()

            var competition = {
                title,
                creator,
                year,
                endDate,
                descr,
                tech,
                person: personInfo.displayName, //creator of competition
                userId: personInfo.uid //reference the user
            }
        
           const success = await addCompetitionCollection(competition)
           if(success) {
            console.log("added the competition successfully")
            setLoading(false)
            navigation.goBack()

           } else {
            console.log("Oops! Competition couldn't be added")
            setLoading(false)
           }
        } else {
            Alert.alert("Oops! Please add all the Competition information.")
        }
    
        }

    return (

        <View style={styles.inputGroup}>

        <Text style={styles.inputLabel}>Title</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='Competition Title' 
        defaultValue={title}
        onChangeText={newValue => setTitle(newValue)} />

        <Text style={styles.inputLabel}>Year</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='2023' 
        defaultValue={year}
        onChangeText={newValue => setYear(newValue)} />

        <Text style={styles.inputLabel}>Date</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='Day and Month' 
        defaultValue={creator}
        onChangeText={newValue => setCreator(newValue)} />

        <Text style={styles.inputLabel}>Description</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='Description of the Competition' 
        defaultValue={descr}
        onChangeText={newValue => setDescr(newValue)} />

        <Text style={styles.inputLabel}>End Date</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='Day, Month and Year' 
        defaultValue={endDate}
        onChangeText={newValue => setEndDate(newValue)} />

        <Text style={styles.inputLabel}>Categories</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='Runway' 
        defaultValue={tech}
        onChangeText={newValue => setTech(newValue)} />

    {!loading ?  (
        <TouchableOpacity style={styles.submitButton} onPress={createCompetition}>
            <Text style={styles.submitButtonText}>Create Competition</Text>
        </TouchableOpacity>


        ):  <ActivityIndicator animating={loading} size={40} />}
        </View>
    )
}

export default CompetitionEntryScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputGroup:{
        alignSelf: 'center',
        margin: 20,
    },
    submitButton:{
        marginTop: 10,
        backgroundColor: 'pink',
        width: 150,
        height: 30,
        borderRadius: 10,
    },


})