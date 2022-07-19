/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { CartContext } from "./CartContext";
import { BadgeCheckIcon } from "@heroicons/react/solid"
import { doc, updateDoc, getFirestore, connectFirestoreEmulator } from "firebase/firestore"

const ItemDetail = ({ id, model, stack, upper, type, stock, price, imageUrl, description }) => {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext)
    const addOn = (amount) => {
        setCount(amount)
        addItem({
            model,
            type,
            id,
            price,
            imageUrl,
        }, amount)
    }
    const updateStock = async (id) => {
        let current = stock - count
        var db = getFirestore();
        const shoe = doc(db, 'items', id);
        await updateDoc(shoe, { stock: current })
    }
    return (
        <>
            <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 bg-gray-100 bg-repeat w-full h-full heropattern-bubbles-red-200">
                <h5 className="mb-4 text-xl font-medium text-black-500 dark:text-black-400">{model}</h5>
                <div className="flex items-baseline text-gray-900 dark:text-black">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl black-900 font-extrabold tracking-tight">{price}</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="my-7 space-y-5">
                    <li className="flex space-x-3  decoration-gray-500">
                        <span className="text-base font-normal leading-tight text-gray-800">{description}</span>
                    </li>
                    <li className="flex space-x-3">
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-800">Stack: {stack}</span>
                    </li>
                    <li className="flex space-x-3">
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-800">Upper: {upper}</span>
                    </li>
                    <li className="flex space-x-3">
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-800"> surface type: {type}</span>
                    </li>
                    <li className="flex space-x-3">
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-800"> Inventory Available: {stock - count}</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-800">Gorex Waterproof</span>
                    </li>
                </ul>
                {
                    count > 0 ?
                        <Link to='/cart'>
                            <button type="button" className="text-white bg-gray-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" onClick={
                                updateStock(id)
                            }>Go to checkout</button>
                        </Link> :
                        <ItemCount stock={stock} initial={0} addOn={addOn} />
                }
            </div>
        </>
    )
}

ItemDetail.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    model: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.string,
    stack: PropTypes.string,
    upper: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string
}





export default ItemDetail
