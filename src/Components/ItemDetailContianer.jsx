/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import PropTypes from 'prop-types'


const ItemDetailContainer = ({ activeID }) => {
    const filter = activeID
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    //const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const getDetail = () => {
            fetch("inventory.json") // public is available for all of them
                .then(response => response.json())
                .then((data) => {
                    var selectedShoe = data.find((shoe) => {
                        return shoe.id === filter;
                    })
                    setItem(selectedShoe)
                    setLoading(false)
                })
                .catch(error => {
                    console.error("Error somethign happened in fetch", error)
                })
        }

        setTimeout(() => {
            getDetail()
        }, 5000)
    }, [activeID])

    if (!loading) {
        return (
            <>
                <div>
                    <ItemDetail activeItem={item} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    Loading ICON
                </div>
            </>
        )
    }
}
ItemDetailContainer.propTypes = {
    activeID: PropTypes.number
}


export default ItemDetailContainer




