import { Timestamp, addDoc, doc } from "firebase/firestore";
import {db} from "../firebase";

//user collection
export const createUserInDb = async (username, email, iud) => {

    try {
        console.log("Creating user in db... " + uid)

        const docRef = await addDoc(doc(db, "users", uid), {
            username,
            email,
            role: "Model",
            createdAt: Timestamp.now()
    })
    console.log("User added doc id:" + docRef.id)

    } catch(e) {
        console.log("Something went wrong: " + docRef.id)
    }

}