/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getFirestore, getDocs, query, where } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const id = itemId
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
    }, [itemId])

    return (
        <>
            <div>
                <ItemDetail {...item} />
            </div>
        </>
    )
}



export default ItemDetailContainer




