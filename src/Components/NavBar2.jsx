import React from "react";

const NavBar2 = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <nav>
                <ul className="flex">
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                    </li>
                </ul>
            </nav></>
    )
}

export default NavBar2