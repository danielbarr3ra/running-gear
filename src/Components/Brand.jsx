import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom";



const Brand = () => {
    return (
        <Link to={"/"}>
            <ChevronDoubleRightIcon className="h-10 w-10 text-black-100" />
            <p className="font-mono text-2xl italic font-black ">RunOn</p>
        </Link>


    )
}

export default Brand;