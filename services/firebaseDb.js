import { addDoc, doc } from "firebase/firestore";
import {db} from "../firebase";

//user collection
export const createUserInDb = async (email) => {

    try {
        const docRef = await addDoc(doc(db, "users", uid))
        console.log("User added doc id: " + docRef.id)
    } catch(e) {
        console.log("Something went wrong: " + docRef.id)
    }

}