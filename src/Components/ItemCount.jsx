import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import PropTypes from 'prop-types'

const ItemCount = ({ stock, initial, }) => {
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
        <div className="itemCount m-3 flex s">
            <button className="addItem">
                <PlusCircleIcon onClick={addingItem} className="h-8 w-8 text-black-900" />
            </button>
            <div className="item count text-xl">
                {cartCount}
            </div>
            <div className="removeItem">
                <MinusCircleIcon onClick={removingItem} className="h-8 w-8 text-black-900" />
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number,
    initial: PropTypes.number
}


export default ItemCount