import React from "react";
import Brand from "./Brand";
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'


const NavBar = () => {
    return (
        <>
            <nav class="nav-extended orange light-2">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo"><Brand /></a>
                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><a href="#road">Road Gear</a></li>
                        <li class="tab"><a href="#trail">Trail Gear </a></li>
                        <li class="tab"><a href="#sale">Sale</a></li>
                        <li class="tab">
                            <a href="#checkout">
                                Checkout
                            </a>
                        </li>
                        <li class="tab">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar