/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartContainer = () => {
    const { cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, test } = useContext(CartContext)
    return (
        <div>
            {JSON.stringify(cart)}
        </div>
    )
}

export default CartContainer