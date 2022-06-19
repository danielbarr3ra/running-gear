/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    const getItem = async () => {
        const response = await fetch('/inventory.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const invetory = await response.json()
        const item = invetory.find(({ id }) => {
            return (id == itemId)
        })
        setItem(item)
    }
    useEffect(() => {
        getItem()
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




