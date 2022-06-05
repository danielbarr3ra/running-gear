import React from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";
const SearchBar = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="flex border-1 border-gray-100 rounded">
                <input type="text" className="px-4 py-2 w-40" placeholder="shoes..."></input>
                <button className="text-black border-l ">
                    <SearchCircleIcon className="h-6 w-6 text-black-100" />
                </button>
            </div>
        </div>
    )
}

export default SearchBar