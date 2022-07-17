import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Item = ({ title, model, price, imageUrl, id }) => {
    const routePath = `/item/${id}`
    return (
        <div className="justify-around rounded-lg bg-gray-100 shadow-lg">
            <img className="object-cover h-48 w-96" src={require(`../${imageUrl}`)}></img>
            <div className="p-10 flex-col justify-between">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Voted: {title}</h5>
                <p className="text-gray-700 text-base mb-4"> {model} </p>
                <p className="text-gray-700 text-base mb-4"> With a price of: {price} </p>
                <Link to={routePath} >
                    <button type="button" className="px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
                </Link>
            </div>
        </div>
    )
}

Item.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    model: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number
}

export default Item