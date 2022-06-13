/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting, clickDetails }) => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [catalog, setCatalog] = useState([])


    useEffect(() => {
        setLoading(true) // loading until error or resolves
        setError(false)

        const getInventoryData = new Promise((res) => {
            setTimeout(() => {
                const mockInventory = [
                    {
                        "id": 134,
                        "title": "Best trainer",
                        "model": "Corner 3",
                        "type": "road",
                        "stack": "5cm",
                        "upper": "wieved",
                        "stock": 100,
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
                        "stock": 65,
                        "description": "an awesome race ready shoe with a carbon plage",
                        "price": 170,
                        "imageUrl": "images/135.jpeg"
                    },
                    {
                        "id": 136,
                        "title": "Best trail",
                        "model": "speadBull",
                        "type": "Trail",
                        "stack": "8cm",
                        "upper": "wieved",
                        "stock": 30,
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
                        "stock": 20,
                        "description": "super confy",
                        "price": 80,
                        "imageUrl": "images/137.jpeg"
                    }
                ]
                res(mockInventory) // resolves the constant
            }, 5000)
        })


        getInventoryData
            .then((res) => {
                // the data is the mockInventory
                setCatalog(res)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []) //without the dependineces it will run infinelty the use effect.



    return (
        <>
            <h1 className="text-4xl mt-0 mb-2 text gray-900">{greeting}</h1>
            <div> {loading && "loading catalog"} </div>
            <div> {error && "an error in loading catalog"} </div>
            <ItemList catalog={catalog} clickDetails={clickDetails} />
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
}

export default ItemListContainer