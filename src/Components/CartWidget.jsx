import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline"
import PropTypes from 'prop-types';

const CartWidget = ({ itemCount }) => {
    return (
        <>
            <div className="flex items-center justify-center">
                <ShoppingCartIcon className="h-8 w-8 text-black-100" />
                <div className="italic"> {itemCount}</div>
            </div>
        </>
    )
}

CartWidget.propTypes = {
    itemCount: PropTypes.number
}

export default CartWidget