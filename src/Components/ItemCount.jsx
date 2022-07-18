import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import PropTypes from 'prop-types'

const ItemCount = ({ stock, initial, addOn }) => {
    const [cartCount, setCartCount] = useState(initial)
    const removingItem = () => {
        if (cartCount !== 0) {
            setCartCount(cartCount - 1)
        } else {
            alert("you cant have negative shoew buddy!")
        }
    }
    const addingItem = () => {
        if (cartCount < stock) {
            setCartCount(cartCount + 1)
        } else {
            alert("hey not enough stock")
        }
    }
    return (
        <>
            <div className="flex justify-around">
                <button className="addItem">
                    <PlusCircleIcon onClick={addingItem} className="h-8 w-8 text-black-900" />
                </button>
                <div className="text-xl">
                    {cartCount}
                </div>
                <button className="removeItem">
                    <MinusCircleIcon onClick={removingItem} className="h-8 w-8 text-black-900" />
                </button>
            </div>
            <div>
                <button type="button" className="text-white bg-gray-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" onClick={() => { addOn(cartCount) }}>Add To Cart</button>
            </div></>

    )
}

ItemCount.propTypes = {
    stock: PropTypes.number,
    initial: PropTypes.number,
    addOn: PropTypes.func
}


export default ItemCount