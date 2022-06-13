//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    //const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const getDetail = () => {
            fetch("inventory.json") // public is available for all of them
                .then(response => response.json())
                .then((data) => {
                    var selectedShoe = data.find((shoe) => {
                        return shoe.id === 136;
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
    }, [])

    if (!loading) {
        return (
            <>
                <div>
                    ItemDetailContainer
                </div>
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


export default ItemDetailContainer




