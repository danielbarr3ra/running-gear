import React from "react";
import Brand from "./Brand"
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import AccountLogIn from "./AccountLogIn";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav className="flex items-center flex-wrap p-6 bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-400 justify-between">
                <div className="flex items-center ">
                    <Brand />
                </div>
                <Link to={"/category/new"}>
                    <div className="navTab">
                        New
                    </div>
                </Link>
                <Link to={"/category/road"}>
                    <div className="navTab ">
                        Road
                    </div>
                </Link>
                <Link to={"/category/trail"}>
                    <div className="navTab ">
                        Trail
                    </div>
                </Link>
                <Link to={"/category/apperal"}>
                    <div className="navTab ">
                        Apperal
                    </div>
                </Link>
                <div className="searchBar">
                    <SearchBar />
                </div>
                <div className="accountLogIn">
                    <AccountLogIn />
                </div>
                <div className="Cart flex">
                    <CartWidget itemCount={2} />
                </div>
            </nav>
        </>
    )
}

export default NavBar