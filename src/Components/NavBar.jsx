import React from "react";
import Brand from "./Brand"
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import AccountLogIn from "./AccountLogIn";

const NavBar = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-100 bg-repeat w-full h-full heropattern-topography-red-400">
                <div className="flex items-center w-1/12">
                    <Brand />
                </div>
                <nav className="flex items-center justify-around w-4/12 font-semibold text-l">
                    <div className="navTab">
                        New
                    </div>
                    <div className="navTab ">
                        Road
                    </div>
                    <div className="navTab ">
                        Trail
                    </div>
                    <div className="navTab ">
                        Apperal
                    </div>
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