import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = ({ greeting }) => {
    const [loading] = useState()
    const [error] = useState()
    const [catalog, setCatalog] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsFromCollection = collection(db, "items");

        if (categoryId == 'road' || categoryId == 'trail') {
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



    return (
        <>
            <h1 className="text-4xl mt-0 mb-2 text gray-900">{greeting} catalog for {categoryId}</h1>
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