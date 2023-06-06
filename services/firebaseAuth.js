import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';


//Register User Functionality (REGISTER SCREEN)
const registerNewUser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //sign in
        const user = userCredential.user;
        console.log('New User: ' + user)
        //create user in  DB
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ';' + errorMessage)
    })
}

//Sign In Functionality (LOGIN SCREEN)
const signInUser = () => {

}

//Sign Out Functionality
const signOutUser = () => {

}
