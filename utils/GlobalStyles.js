import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo:{
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain'
    },
    heading: {
        fontSize: 21,
        textAlign: 'center'
    },
    inputLabel: {
        fontSize: 12,
        marginTop: 20,
        marginBottom: 5,
        paddingLeft: 5
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    submitButton:{
        backgroundColor: 'black',
        marginTop: 30,
        padding: 15,
        borderRadius: 5,
        marginBottom: 20
    },
    submitButtonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'

    }
})