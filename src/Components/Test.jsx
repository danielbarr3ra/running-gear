/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getFirestore, getDocs, query, where } from "firebase/firestore"

const Test = () => {
    const [inventory, setInventory] = useState([])
    const [filtered, setFiltered] = useState([])
    const [item, setItem] = useState()
    useEffect(() => {
        const id = "3SBN8Mo09SvZ1nZhD53O"
        const aCollection = 'items'
        const db = getFirestore();
        const docItem = doc(db, aCollection, id);
        getDoc(docItem).then(
            (res) => {
                setItem({
                    id: id,
                    ...res.data()
                })
            }
        )
        console.log(item)

        const itemsFromCollection = collection(db, "items");
        getDocs(itemsFromCollection).then((snapshot) => {
            setInventory(snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            })))
        }).then(
            console.log(inventory)
        )

        // using query
        const q = query(
            collection(db, 'items'),
            where("type", "==", "trail")
        )
        getDocs(q).then((snapshot) => {
            setFiltered(snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            })))
        }).then(
            console.log(filtered)
        )

    }, [])
    //get array of objects from collection

    return (
        <div>
            <h1>item</h1>
            {JSON.stringify(item)}
            <h1>All of it</h1>
            {JSON.stringify(inventory)}
            <h1>Filtered</h1>
            {JSON.stringify(filtered)}
        </div>
    )
}

export default Test 