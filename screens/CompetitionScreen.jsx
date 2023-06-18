import React, {useCallback, useEffect, useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import ProjectCard from '../components/ProjectCard'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from "@react-navigation/native";
import { getAllCompetitionsFromCollection } from "../services/firebaseDb";

const CompetitionScreen = ({navigation}) => {

    // let dummyData = [
    //     {title: 'Elite Model Look', year: 2023, creator: '2 March', descr: 'To participate in the contest, the model should be aged between 14 and 26 years and should have permission from the parents or guardian in case he or she is under the age of 18 years. The participant can apply from anywhere in the world for this competition. Upload your best images to stand a chance to win R50 000 and the title of the Elite Model Look!', endDate: '4 March 2023',tech: ['Runway', 'Firebase']},
    // ]

    const [competitions, setCompetitions] = useState([])

    const addNew = () => {
        navigation.navigate("Add") //navigate to Competition Entry Screen
    }


    //call from DB
//     useFocusEffect (
//         useCallback(() => {
//             getAllCompetitions
//             return() => {
//                 console.log("Home screen Not in View")
//             }
//         }, [])
//     );

    useEffect( () => {
       getAllCompetitions()
    }, [])

    const getAllCompetitions = async () =>{
         console.log("Getting all the competitions...")
         const allCompetitions = await getAllCompetitionsFromCollection()
        setCompetitions(allCompetitions)

}


    // const getAllCompetitions = async () => {
    //     console.log("Getting all the competitions...")
    //     const allCompetitions = await getAllCompetitionsFromCollection()
    //     setCompetitions(allCompetitions)
    // }


    //create new competition



    return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.9} onPress={addNew}>
        <Ionicons name="add-circle-outline" size={40} color="black"/>
      </TouchableOpacity>

      <ScrollView>
        {competitions.map((competitions, index) => ( //was project
            <TouchableOpacity
                key={index}
                onPress={() => navigation.push("Details", {competitions})} //was project
                activeOpacity={0.75}>
                <ProjectCard data={competitions}/>
            </TouchableOpacity>

        ))}
      </ScrollView>



    </View>

    )
}

export default CompetitionScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    addButton:{
        margin: 20,
        alignSelf: "center",
    }

})