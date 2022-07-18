import React from "react";
import Brand from "./Brand"
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import AccountLogIn from "./AccountLogIn";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-400">
                <div className="flex items-center w-1/12">
                    <Brand />
                </div>
                <nav className="flex items-center justify-around w-4/12 font-semibold text-l">
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
                </nav>
                <div className="sessionNavigation flex justify-around w-3/12">
                    <div className="searchBar">
                        <SearchBar />
                    </div>
                    <div className="accountLogIn">
                        <AccountLogIn />
                    </div>
                    <div className="Cart flex">
                        <CartWidget itemCount={2} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar