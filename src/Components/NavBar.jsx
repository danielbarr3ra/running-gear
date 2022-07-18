import React from "react";
import Brand from "./Brand"
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import AccountLogIn from "./AccountLogIn";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid"


const NavBar = () => {
    const displayNav = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden")
    }
    return (
        <>
            <nav className="flex items-center flex-wrap p-6 bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-300 justify-between hidden md:flex items-center space-x-1">
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
                    <CartWidget itemCount={0} />
                </div>
            </nav>
            {/* this is the hidden menu button for the mobile  */}
            <div className=" p-6 bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-400 md:hidden ">
                <div className="flex items-cente justify-between">
                    <div className="flex items-center ">
                        <Brand />
                    </div>
                    <button className="outline-none mobile-menu-button" onClick={() => {
                        displayNav()
                    }}>
                        <ChevronDownIcon className="h-10 w-10 text-black-100" />
                    </button>
                </div>
                {/* hiddent mmenu */}
                <div className="hidden mobile-menu flex-col">
                    <ul className="flex-col items-stretch hover:items-center">
                        <Link to={"/category/new"}>
                            <li className="navTab">
                                New
                            </li>
                        </Link>
                        <Link to={"/category/road"}>
                            <li className="navTab ">
                                Road
                            </li>
                        </Link>
                        <Link to={"/category/trail"}>
                            <li className="navTab ">
                                Trail
                            </li>
                        </Link>
                        <Link to={"/category/apperal"}>
                            <li className="navTab ">
                                Apperal
                            </li>
                        </Link>
                        <li className="Cart flex">
                            <CartWidget itemCount={0} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar