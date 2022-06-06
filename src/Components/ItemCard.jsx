/* eslint-disable no-undef */
import React from "react";
import PropTypes from 'prop-types';
import ItemCount from "./ItemCount";


const ItemCard = ({ shoeModel, shoeDescription }) => {
    return (
        <>
            <div className="wrapper max-w-sm flex-col justify-between text-black 800 rounded-lg bg-gray-100 shadow-lg">
                <img className="max-w-sm rounded-lg" src={require("../images/shoes.jpeg")}></img>
                <div className="p-10 flex-col justify-between">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{shoeModel}</h5>
                    <p className="text-gray-700 text-base mb-4"> {shoeDescription} </p>
                    <ItemCount stock={10} initial={1} />
                    <button type="button" className="px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Add To Cart</button>
                </div>
            </div>
        </>

    )
}

ItemCard.propTypes = {
    shoeModel: PropTypes.string,
    shoeDescription: PropTypes.string
}

export default ItemCard