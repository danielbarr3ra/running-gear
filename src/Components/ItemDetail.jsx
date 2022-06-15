/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ItemDetail = ({ activeItem }) => {
    console.log(JSON.stringify(activeItem))

    const { stack, upper, type, id } = activeItem
    return (

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    activeItem: PropTypes.object
}


export default ItemDetail
