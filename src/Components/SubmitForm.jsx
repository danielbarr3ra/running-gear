/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types'

const SubmitForm = ({ onSubmit, closeForm }) => {
    const validateNames = () => {
        let name = document.submitOrder.cus_name.value
        if (name == "") {
            alert("please provide a name")
            return false
        }
        return true
    }
    const validateEmail = () => {
        let email = document.submitOrder.cus_email.value
        if (email == "" || !email.includes('@')) {
            alert("please provide valid email")
            return false
        }
        return true
    }
    const validatePayment = () => {
        let pay = document.submitOrder.cus_pay.value
        if (pay == "" || pay.length < 12) {
            alert("please provide a valid payman card number")
            return false
        }
        return true
    }
    const validateForm = () => {
        return (validatePayment() && validateEmail() && validateNames())
    }
    return (
        <div className="flex justify-around bg-blue-200">
            <form name="submitOrder" className="sm:w-10/12 md:w-1/2 m-4 p-4 bg-white rounded shadow-xl">
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="cus_name">Name</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="cus_address">Address</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_address" name="cus_address" type="text" required="" placeholder="Street" aria-label="Email" />
                </div>
                <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="cus_pay">Card</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_pay" name="cus_pay" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                </div>
                <div className="mt-4">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" onClick={() => {
                        if (validateForm()) {
                            let name = document.submitOrder.cus_name.value
                            let email = document.submitOrder.cus_email.value
                            let address = document.submitOrder.cus_address.value
                            let pay = document.submitOrder.cus_pay.value
                            onSubmit(name, email, address, pay)
                            closeForm()
                        }
                    }} type="submit">Pay</button>
                </div>
            </form>
        </div>
    )
}

SubmitForm.propTypes = {
    onSubmit: PropTypes.func,
    closeForm: PropTypes.func
}
export default SubmitForm