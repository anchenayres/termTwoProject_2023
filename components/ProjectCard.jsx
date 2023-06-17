import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import CompetitionEntryScreen from '../screens/CompetitionEntryScreen';

const ProjectCard = (props, {navigation}) => {

    const {data} = props

  return (
    <TouchableOpacity style={styles.card} >
        <View>
            <Text style={styles.title}>{data.title} </Text>
            <Text style={styles.description}>{data.creator} {data.year} | Entries Close: {data.endDate}</Text>
            <Text style={styles.descr}>{data.descr}</Text>

            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('EnterComp')}>
                <Text style={styles.submitButtonText} onPress={CompetitionEntryScreen}>Enter Competition</Text>
            </TouchableOpacity>


        <View style={styles.techBox}>
            {data.tech.map((technology, index) => {
                    <View key={index} style={styles.badge}>
                    <Text style={styles.badgeLabel}>{technology}</Text>
                    </View>
            })}
            </View>


        </View>
        {/* <Ionicons name="chevron-forward-outline" size={21} color='white' /> */}
    </TouchableOpacity>
  )
}

export default ProjectCard

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    submitButton:{
        marginTop: 10,
        backgroundColor: 'pink',
        width: 150,
        height: 30,
        borderRadius: 10,
    },
    submitButtonText:{
        textAlign: 'center',
        padding: 5,
        color: 'white',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    description: {
        color: 'red',
        marginBottom: 10,
    },
    descr:{
        color: 'black',
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
        flexWrap: 'wrap',
        color: 'red'

    }
})