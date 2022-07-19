import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = () => {
    const [loading] = useState()
    const [error] = useState()
    const [catalog, setCatalog] = useState([])
    const { categoryId } = useParams();
    let message
    const cattegories = ['road', 'trail', 'sandal', 'new']
    useEffect(() => {
        const db = getFirestore();
        const itemsFromCollection = collection(db, "items");

        if (cattegories.includes(categoryId)) {
            let q = query(
                collection(db, 'items'),
                where("type", "==", categoryId)
            )
            getDocs(q).then((snapshot) => {
                setCatalog(snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                })))
            }).then(
                console.log(catalog)
            )
        } else {
            getDocs(itemsFromCollection).then((snapshot) => {
                setCatalog(snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                })))
            }).then(
                console.log(catalog)
            )
        }
    }, [categoryId])

    if (cattegories.includes(categoryId)) {
        message = `catalog for ${categoryId}`
    } else {
        message = `Welcom to run on!`
    }
    return (
        <>
            <h1 className="content-center text-4xl text gray-900">{message}</h1>
            <div> {loading && "loading catalog"} </div>
            <div> {error && "an error in loading catalog"} </div>
            <ItemList catalog={catalog} />
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
}

export default ItemListContainer