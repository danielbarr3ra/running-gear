/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [catalog, setCatalog] = useState([])
    const { categoryId } = useParams();

    // returns a promis that needs to be handled
    const getInventory = async () => {
        const response = await fetch('/inventory.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const invetory = await response.json()
        if (categoryId === "road" || categoryId === "trail") {
            let filter = invetory.filter((shoe) => {
                return (shoe.type == categoryId)
            })
            setCatalog(filter)
        } else {
            setCatalog(invetory)
        }
        setLoading(false)
    }


    useEffect(() => {
        setLoading(true) // loading until error or resolves
        setError(false)
        setTimeout(() => {
            getInventory().catch("could not load data")
        }, 1000)
        console.log(catalog)
        console.log(categoryId)
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