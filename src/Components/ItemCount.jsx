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
        <><div className="itemCount m-3 flex s">
            <button className="addItem">
                <PlusCircleIcon onClick={addingItem} className="h-8 w-8 text-black-900" />
            </button>
            <div className="item count text-xl">
                {cartCount}
            </div>
            <button className="removeItem">
                <MinusCircleIcon onClick={removingItem} className="h-8 w-8 text-black-900" />
            </button>
        </div><div>
                <button type="button" className="px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { addOn(cartCount) }}>Add To Cart</button>
            </div></>

    )
}

ItemCount.propTypes = {
    stock: PropTypes.number,
    initial: PropTypes.number,
    addOn: PropTypes.func
}


export default ItemCount