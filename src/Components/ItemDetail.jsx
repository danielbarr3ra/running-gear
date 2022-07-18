import React, { useState, useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { CartContext } from "./CartContext";
import { BadgeCheckIcon } from "@heroicons/react/solid"

const ItemDetail = ({ id, model, stack, upper, type, stock, price, imageUrl }) => {
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
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <BadgeCheckIcon className="h-5 w-5" />
                        <span className="text-base font-normal leading-tight text-gray-500">24×7 phone &amp; email support</span>
                    </li>
                </ul>
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                {
                    count > 0 ?
                        <Link to='/cart'>
                            <button type="button" className="text-white bg-gray-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Go to checkout</button>
                        </Link> :
                        <ItemCount stock={stock} initial={0} addOn={addOn} />
                }
            </div>

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

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">ShoeDetials for {model}</h4>

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

ItemDetail.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    model: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    stack: PropTypes.string,
    upper: PropTypes.string,
    type: PropTypes.string
}





export default ItemDetail
