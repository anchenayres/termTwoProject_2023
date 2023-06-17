import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import ProjectCard from '../components/ProjectCard'
import Ionicons from '@expo/vector-icons/Ionicons';




const CompetitionScreen = ({navigation}) => {

    let dummyData = [
        {title: 'Elite Model Look', year: 2023, creator: '2 March', descr: 'To participate in the contest, the model should be aged between 14 and 26 years and should have permission from the parents or guardian in case he or she is under the age of 18 years. The participant can apply from anywhere in the world for this competition. Upload your best images to stand a chance to win R50 000 and the title of the Elite Model Look!', endDate: '4 March 2023',tech: ['Runway', 'Firebase']},
        {title: 'Flipkart Style Icon', year: 2023, creator: '14 September', descr: 'Every model dreams of putting their most presentable foot forward for masses of around 2 million people daily. This opportunity is offered by Flipkart style icon contest. Upload your best images to stand a chance to win R50 000 and the title of the Flipkart Style Icon!', endDate: '16 September 2023', tech: ['React Native', 'Firebase']},
        {title: 'Lakme Fashion Week', year: 2023, creator: '15 August', descr: 'Being an Indian modeling contest, it is held annually in Mumbai and is considered as a premium fashion event in India which is sponsored by IMG Reliance. Upload your best images to stand a chance to win R50 000 and the title of the Lakme Fashion Week Icon!', endDate: '17 August 2023', tech: ['React Native', 'Firebase']},
        {title: 'Elite Model Look', year: 2023, creator: '2 March', descr: 'To participate in the contest, the model should be aged between 14 and 26 years and should have permission from the parents or guardian in case he or she is under the age of 18 years. The participant can apply from anywhere in the world for this competition.', endDate: '4 March 2023',tech: ['Runway', 'Firebase']},
        {title: 'Flipkart Style Icon', year: 2023, creator: '14 September', descr: 'Every model dreams of putting their most presentable foot forward for masses of around 2 million people daily. This opportunity is offered by Flipkart style icon contest.', endDate: '16 September 2023', tech: ['React Native', 'Firebase']},
        {title: 'Lakme Fashion Week', year: 2023, creator: '15 August', descr: 'Being an Indian modeling contest, it is held annually in Mumbai and is considered as a premium fashion event in India which is sponsored by IMG Reliance.', endDate: '17 August 2023', tech: ['React Native', 'Firebase']},
    ]

    const addNew = () => {
        navigation.navigate("Add") //navigate to Competition Entry Screen
    }

    return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.9} onPress={addNew}>
        <Ionicons name="add-circle-outline" size={40} color="black"/>
      </TouchableOpacity>

      <ScrollView>
        {dummyData.map((project, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => navigation.push("Details", {project})}
                activeOpacity={0.75}>
                <ProjectCard data={project}/>
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

})