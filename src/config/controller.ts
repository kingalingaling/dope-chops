import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

//Update Fulfilled
export const updateFulfilled = async (id:string, docData:any) => {
    const getOrder = doc(db, `orders/${id}`)
    await setDoc(getOrder, docData, {merge:true})
}

//Delete Order
export const deleteOrder = async (id:string) => {
    const document = doc(db, `orders/${id}`)
    await deleteDoc(document);
}