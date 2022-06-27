/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext

const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        console.log(sizeCart())
        setCartSize(sizeCart)
    }, [cart])
    const addItem = (item, quantity) => {
        const anItem = {
            ...item,
            quantity
        }
        if (isInCart(anItem.id)) {
            const findProduct = cart.find((shoe) => shoe.id === anItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].quantity += quantity;
            setCart(auxArray);
        } else {
            setCart([...cart, anItem]);
        }
        alert("addedItem from Context")

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

    const test = () => {
        alert("hey there")
    }

    const sizeCart = () => {
        return cart.reduce(function (a, b) {
            return a + b.quantity;
        }, 0);
    }
    return (
        <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, test, cartSize }}> {children} </Provider>);
};

export default MyProvider;