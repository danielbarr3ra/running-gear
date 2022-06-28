/* eslint-disable no-unused-vars */
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline"
import PropTypes from 'prop-types';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useState, useEffect } from "react"

const CartWidget = () => {
    const { cartSize } = useContext(CartContext)
    if (cartSize > 0) {
        return (
            <>
                <div className="flex items-center justify-center">
                    <div className="italic"> {cartSize} </div>
                    <ShoppingCartIcon className="h-8 w-8 text-black-100" />
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

CartWidget.propTypes = {
    itemCount: PropTypes.number
}

export default CartWidget