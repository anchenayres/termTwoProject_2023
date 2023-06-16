import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, Alert, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import ProjectScreen from "./ProjectScreen";

const ViewProfileScreen = () => {    

    const [name, setUsername] = useState('')
    const [description, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (

    <View>
        <Image style={styles.face} source={require("../assets/faceOne.jpg")} />
        <Text style={styles.nameAge}>{name}Jessie Jay | 24</Text>
        <Text style={styles.description}>{description}Gender: Female | Eye Colour: Blue | Hair Colour: Blond | Height: 1.78m | Bust: 86cm | Waist: 79cm | Hips: 90cm</Text>
        <Text style={styles.languages}>Languages: English, French, Afrikaans</Text>

        <Text style={styles.categoryTitle}>Categories</Text>
        <Text style={styles.categories}>Runway Swimsuit Lingerie Editorial</Text>

        <Text style={styles.agencyTitle}>Current Agency</Text>
        <Text style={styles.agency}>Elite Model Management</Text>

        <Image style={styles.faceTwo} source={require("../assets/faceTwo.jpg")} />
        <Image style={styles.faceThree} source={require("../assets/faceThree.jpg")} />
        <Image style={styles.faceFour} source={require("../assets/faceOne.jpg")} />

        <Text style={styles.votes}>Votes</Text>
        <Text style={styles.competitions}>Competitions</Text>
        <Text style={styles.winnings}>Winnings</Text>

        <Text style={styles.votesNum}>20</Text>
        <Text style={styles.competitionsNum}>15</Text>
        <Text style={styles.winningsNum}>10</Text>
    
    </View>
    )
}

export default ViewProfileScreen

const styles = StyleSheet.create({
    face:{
        height: 150,
        width: 150,
        borderRadius: 100,
        alignSelf: 'center',
        margin: 20,
    },
    faceTwo:{
        height: 130,
        width: 130,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 20,
    },
    faceThree:{
        height: 130,
        width: 130,
        borderRadius: 10,
        marginTop: -130,
        marginLeft: 150,
    },
    faceFour:{
        height: 130,
        width: 130,
        borderRadius: 10,
        marginTop: -130,
        marginLeft: 290,
    },
    nameAge:{
        alignSelf: 'center',
    },
    description:{
        alignSelf: 'center',
        margin: 10,
    },
    languages:{
        alignSelf: 'center',
    },
    categoryTitle:{
        alignSelf: 'center',
        marginTop: 40,
    },
    categories:{
        alignSelf: 'center',
        marginTop: 20,
    },
    agencyTitle:{
        alignSelf: 'center',
        marginTop: 20,
    },
    agency:{
        alignSelf: 'center',
        marginTop: 20,
    },
    competitions:{
        alignSelf: "center",
        marginTop: -25,
        fontSize: 20,

    },
    votes:{
        marginTop: 60,
        marginLeft: 46,
        fontSize: 20,


    },
    winnings:{
        marginTop: -26,
        marginLeft: 310,
        fontSize: 20,
    },

    competitionsNum:{
        alignSelf: "center",
        fontSize: 20,
        marginTop: -30,
        color: "brown",
    },
    votesNum:{
        marginTop: 30,
        marginLeft: 60,
        fontSize: 20,
        color: "brown",
    },
    winningsNum:{
        marginTop: -30,
        marginLeft: 340,
        fontSize: 20,
        color: "brown",
    },





})