import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import ProjectCard from '../components/ProjectCard'
import Ionicons from '@expo/vector-icons/Ionicons';


const ProjectScreen = () => {

    let dummyData = [
        {title: 'project 1', year: 2023, creator: 'Anchen', tech: ['React Native', 'Firebase']},
        {title: 'project 2', year: 2023, creator: 'Anchen', tech: ['React Native', 'Firebase']},
        {title: 'project 3', year: 2023, creator: 'Anchen', tech: ['React Native', 'Firebase']},
    ]

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>All Projects</Text>

      <TouchableOpacity style={styles.addButton} activeOpacity={0.9}>
      <Ionicons name="add-circle-outline" size={40} color='black' />
      </TouchableOpacity>

      <ScrollView>
        {dummyData.map((project, index) => (
            <ProjectCard key={index} data={project}/>
        ))}
      </ScrollView>


    </View>
  )
}

export default ProjectScreen

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 20
    },
    addButton:{
        padding: 15,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        backgroundColor: 'pink',
        position: 'absolute',
        right: 40,
        zIndex: 999,
        bottom: 100,
        borderRadius: 10,

    }
})