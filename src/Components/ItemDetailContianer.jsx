//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
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
                    console.log(selectedShoe)
                    console.log(item)
                })
                .catch(error => {
                    console.error("Error somethign happened in fetch", error)
                })
        }

        setTimeout(() => {
            getDetail()
        }, 2000)
    }, [])

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
}


export default ItemDetailContainer




