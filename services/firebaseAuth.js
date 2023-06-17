import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfil } from 'firebase/auth';
import { Alert } from 'react-native';
import { createUserInDb } from './firebaseDb';
import { auth } from '../utils/firebase';


//Register User Functionality (REGISTER SCREEN) // change
export const registerNewUser = (username, email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        //sign in
        const user = userCredential.user;
        console.log('New User: ' + user)

        updateAuthProfile(username) //to update profile in authentication

        //create user in  DB
        await createUserInDb(username, email, user.uid) 
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ':' + errorMessage)

        Alert.alert("Oops!", errorCode, [
            {text: 'Try again', onPress: () => {}}
        ])
    });
}

//Sign In Functionality (LOGIN SCREEN)
export const signInUser = async (email, password) => {

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log("User Signed In: " + user.email)

        // setLoading(true)

        Alert.alert("You're in", "You have successfully logged in", [
            {text: "Thanks", onPress:() =>{}}
        ])
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + ":" + errorMessage)
        
        Alert.alert("Oops! Unsuccessfull SignIn", errorMessage, [
            {text: "Thanks", onPress:() =>{}}
        ])


    })
}

//Sign Out Functionality
const signOutUser = () => {
    signOutUser(auth)
    .then(() => {
        console.log("Logged Out Successfully")
    }).catch((error) => {
        console.log(error.errorMessage)
    })
}

export const getCurrentUser = () => {
    return auth.currentUser;
}

const updateAuthProfile = (username) => {
    updateProfile(auth.currentUser, {
        displayName: username, photoURL: "https://media.istockphoto.com/id/1265032285/photo/portrait-of-young-girl-with-clean-skin-and-soft-makeup.jpg?s=612x612&w=0&k=20&c=GcrInK2xkdxcInX0quxPrdFGkv8DXXDPShUia2T1pv4="
    }).then(() => {

        //profile update

    }).catch((error) => {

    });
}
