import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const ProjectCard = (props) => {

    const {data} = props

  return (
    <TouchableOpacity style={styles.card} >
        <View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.creator} - {data.year}</Text>

        <View style={styles.techBox}>
            {data.tech.map((technology, index) => {
                    <View key={index} style={styles.badge}>
                    <Text style={styles.badgeLabel}>{technology}</Text>
                    </View>
            })}
            </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={21} color='white' />
    </TouchableOpacity>
  )
}

export default ProjectCard

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5,
    },
    description: {
        color: 'white',
        marginBottom: 10,
    },
    badge: {
        color: 'black',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 20,
    },
    badgeLabel: {
        textAlign: 'center'
    },
    techBox:{
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
})