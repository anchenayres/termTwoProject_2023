import { Timestamp, addDoc, collection, doc, getDocs} from "firebase/firestore";
import { db } from "../utils/firebase";


//user collection
export const createUserInDb = async (username, email, uid) => {

    try {
        console.log("Creating user in db... " + uid)

        const docRef = await addDoc(doc(db, "users", uid), {
            username,
            email,
            createdAt: Timestamp.now()
            })

    } catch(e) {
        console.log("Something went wrong: " + docRef.id)
    }

}

//competitions collection

export const addCompetitionCollection = async (competition) => {
    try {
        const docRef = await addDoc(collection(db, "competitions"), competition) //addDoc is to generate id

        console.log("Added competition successfully!" + docRef.id)
        if(docRef.id) {
            return true
        } else {
            return false
        }
    } catch(e) {
        console.log("Something went wrong")
    }
}

//getting all the competitions
export const getAllCompetitionsFromCollection = async () =>{
    try {
        var competitions = []

        const snapshot = await getDocs(collection(db, "competitions"))
        snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
            competitions.push(doc.data())
        })
        return competitions
    } catch(e) {
        console.log("Something went wrong" + e)
        return []

    }
}