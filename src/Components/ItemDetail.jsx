/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types'

const ItemDetail = ({ activeItem }) => {
    console.log(JSON.stringify(activeItem))

    const { stack, upper, type } = activeItem
    return (
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white">
            <h1>Stack: {stack}</h1>
            <h1>Upper: {upper}</h1>
            <h1>surface type: {type}</h1>
        </div>
    )
}

ItemDetail.propTypes = {
    activeItem: PropTypes.object
}


export default ItemDetail
