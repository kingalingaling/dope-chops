import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const updateFulfilled = async (id:string, docData:any) => {
    const getOrder = doc(db, `orders/${id}`)
    await setDoc(getOrder, docData, {merge:true})
}