/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import PropTypes from 'prop-types'


const ItemDetailContainer = ({ inventory }) => {
    const filter = 136
    const [item, setItem] = useState()
    //const [inventory, setInventory] = useState([]);
    console.log('insideitemdetailcontianer')

    useEffect(() => {

        let detailedShoe = inventory.find(({ id }) =>
            id === filter
        )

        setItem(detailedShoe)
    }, [])

    return (
        <>
            <div>
                <ItemDetail activeItem={item} />
            </div>
        </>
    )
}

ItemDetailContainer.propTypes = {
    inventory: PropTypes.array
}


export default ItemDetailContainer




