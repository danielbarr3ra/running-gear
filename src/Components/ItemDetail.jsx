/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { CartContext } from "./CartContext";
const ItemDetail = ({ id, model, stack, upper, type, stock, price }) => {
    const [count, setCount] = useState(0)
    const { cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, test } = useContext(CartContext)
    // addToCart()
    const addOn = (amount) => {
        alert(`you have added ${amount} shoes to the cart`)
        setCount(amount)
        addItem({
            model,
            type,
            id,
            price
        }, amount)
    }
    return (
        <>
            <div key={id} className="wrapper bg-gray-400 antialiased text-gray-900">
                <img src="/logo192.png" alt="" />
                <div>
                    <div>
                        <div className="relative px-4 -mt-16 ">
                            <div className="bg-white p-6 rounded-lg shadow-lg bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-100">
                                <div className="flex items-baseline">
                                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Stack: {stack}
                                    </span>
                                    <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        Upper: {upper}  &bull; 3 Stack: {stack}
                                    </div>
                                </div>

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">ShoeDetials</h4>

                                <div className="mt-1">
                                    surface type: {type}
                                </div>
                                <div className="mt-4">
                                    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                </div>
                                {
                                    count > 0 ?
                                        <Link to='/cart'>
                                            <button type="button" className="px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Go to checkout</button>
                                        </Link> :
                                        <ItemCount stock={stock} initial={0} addOn={addOn} />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}




export default ItemDetail
