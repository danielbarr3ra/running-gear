import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { CartContext } from "./CartContext";

const CartListItem = ({ location }) => {
    const { cart, addItem, deleteItem } = useContext(CartContext)
    let shoe = cart[location]
    let { id, model, quantity, price, imageUrl } = cart[location]

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src={require(`../${imageUrl}`)} alt="" ></img>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{model}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={
                        () => {
                            deleteItem(id)
                        }
                    }>Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => {
                    addItem({ ...shoe }, -1)
                    if (shoe.quantity == 0) {
                        deleteItem(id)
                    }
                }}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="mx-2 border text-center w-8" type="text" value={quantity} />

                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => {
                    addItem({ ...shoe }, +1)
                    if (shoe.quantity == 0) {
                        deleteItem(id)
                    }
                }}>
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${price * quantity}</span>
        </div>
    )
}

CartListItem.propTypes = {
    location: PropTypes.string,
}


export default CartListItem