import React from "react";
import Brand from "./Brand";
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'


const NavBar = () => {
    return (
        <>
            <nav className="nav-extended orange light-2">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><Brand /></a>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#road">Road Gear</a></li>
                        <li className="tab"><a href="#trail">Trail Gear </a></li>
                        <li className="tab"><a href="#sale">Sale</a></li>
                        <li className="tab">
                            <a href="#checkout">
                                Checkout
                            </a>
                        </li>
                        <li className="tab">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar