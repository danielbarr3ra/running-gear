/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import CartListItem from "./CartListItem";
import ItemListContainer from "./ItemListContainer";
import { Link } from "react-router-dom";
import { collection, doc, getDoc, getFirestore, getDocs, query, where, addDoc } from "firebase/firestore"


const Cart = () => {
    const { cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, test, cartSize, cartPrice } = useContext(CartContext)

    const submitOrder = () => {
        const order = {
            buyer: {
                email: 'email1@gmail.com',
                name: 'test1',
                phone: '000000000'
            },
            items: {
                ...cart
            }
        }
        const db = getFirestore();
        const orders = collection(db, 'orders')
        addDoc(orders, order).then(({ id }) => alert(id))
    }
    if (cart.length == 0) {
        return (<><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Hold on there buckaroo!</strong>
            <span className="block sm:inline">Seems that you need to choses some shoes before checking out</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
            <br></br>
        </div><Link to={"/"}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Lets go back shopping
                </button>
            </Link></>)
    }
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cartSize} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>

                        {cart.map((item, index) => {
                            const { quantity, id, model, price, imageUrl } = item
                            if (item.quantity > 0) {
                                return (<CartListItem key={index} location={index} />)
                            }
                        })}



                        <Link to={"/"} className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {cartSize}</span>
                            <span className="font-semibold text-sm">{cartPrice}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{cartPrice - 10}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={submitOrder}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart