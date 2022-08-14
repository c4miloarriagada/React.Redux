import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async(uid = '') =>{

    if( !uid ) throw new Error('El uid no existe');

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
    const docs = await getDocs(collectionRef);

    const notes = []

   docs.forEach(e => {
    notes.push({id: e.id, ...e.data()})
   })


   return notes;
}
