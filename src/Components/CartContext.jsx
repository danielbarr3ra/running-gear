/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});


const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            cart.push(
                {
                    ...item,
                    cartQuantity: quantity
                }
            )
        }
    }

    const isInCart = (id) => {
        return cart.some((shoe) => shoe.id === id);
    };


    const emptyCart = () => {
        setCart([]);
    };

    const deleteItem = (id) => {
        return setCart(cart.filter((shoe) => shoe.id !== id));
    };

    const getItemQty = () => {
        return cart.reduce((total, item) => (total += item.cartQuantity), 0);
    };

    const getItemPrice = () => {
        return cart.reduce((totalPrice, item) => (totalPrice += item.price * item.cartQuantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}> {children} </CartContext.Provider>);
};

export default MyProvider;