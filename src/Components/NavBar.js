import React from "react";
import 'materialize-css/dist/css/materialize.min.css'


const NavBar = () => {
    return (
        <><nav class="nav-extended orange accent-3">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Running Gear</a>
            </div>
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a href="#RunningGear">Running Gear</a></li>
                    <li class="tab"><a class="active" href="#trailGear">Trail Gear</a></li>
                    <li class="tab"><a href="#aboutUS">About Us</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar