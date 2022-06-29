/* eslint-disable no-unused-vars */
import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"

const Test = () => {
    const id = "3SBN8Mo09SvZ1nZhD53O"
    const collection = 'items'
    const db = getFirestore();
    const docItem = doc(db, collection, id);
    getDoc(docItem).then(
        (res) => {
            console.log(res.data())
            console.log(res.exists())
        }
    )
    return (
        <div>
            <h1> hey test</h1>
        </div>
    )
}

export default Test 