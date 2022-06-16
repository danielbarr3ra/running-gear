/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({ inventory }) => {
    const filter = 137
    const [item, setItem] = useState()

    const { itemId } = useParams()
    const mockInventory = [
        {
            "id": 134,
            "title": "Best trainer",
            "model": "Corner 3",
            "type": "road",
            "stack": "5cm",
            "upper": "wieved",
            "stock": 3,
            "price": 100,
            "imageUrl": "images/134.jpeg"
        },
        {
            "id": 135,
            "title": "Best racer",
            "model": "vaporX",
            "type": "road",
            "stack": "7cm",
            "upper": "wieved",
            "stock": 5,
            "description": "an awesome race ready shoe with a carbon plage",
            "price": 170,
            "imageUrl": "images/135.jpeg"
        },
        {
            "id": 136,
            "title": "Best trail",
            "model": "speadBull",
            "type": "trail",
            "stack": "8cm",
            "upper": "wieved",
            "stock": 2,
            "description": "A great trailshoe for all your needs",
            "price": 100,
            "imageUrl": "images/136.jpeg"
        },
        {
            "id": 137,
            "title": "Most comfortable",
            "model": "AscenCloud",
            "type": "road",
            "stack": "10cm",
            "upper": "wieved",
            "stock": 1,
            "description": "super confy",
            "price": 80,
            "imageUrl": "images/137.jpeg"
        }
    ]
    useEffect(() => {
        let shoeToUse = mockInventory.find(({ id }) => id == itemId)
        setItem(shoeToUse)
    }, [])

    return (
        <>
            <div>
                {JSON.stringify(item)}
            </div>
            <div>
                Nice
            </div>
        </>
    )
}

ItemDetailContainer.propTypes = {
    inventory: PropTypes.array
}


export default ItemDetailContainer




