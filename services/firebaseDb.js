import { Timestamp, addDoc, doc } from "firebase/firestore";
// import {db} from "./firebase";
import { db } from "../utils/firebase";

//user collection
export const createUserInDb = async (username, email, uid) => {

    try {
        console.log("Creating user in db... " + uid)

        const docRef = await addDoc(doc(db, "Users", uid), {
            username,
            email
            })
    console.log("User added doc id:" + docRef.id)

    } catch(e) {
        console.log("Something went wrong: " + docRef.id)
    }

}