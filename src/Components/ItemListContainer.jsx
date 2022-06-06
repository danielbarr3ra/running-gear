import React from "react";
import PropTypes from 'prop-types';
import ItemCard from "./ItemCard";

const ItemListContainer = ({ greeting }) => {
    const inventory = [{
        model: "vaporX"
        , description: "an awesome race ready shoe with a carbon plage"
    }, { model: "speadBull", description: "A great trailshoe for all your needs" }, { model: "AscenCloud", description: "super confy" }]

    return (
        <>
            <h1 className="text-4xl mt-0 mb-2 text gray-900">{greeting}</h1>
            <div className="flex justify-around">
                {inventory.map((shoe) => {
                    return (<ItemCard key={0} shoeDescription={shoe.description} shoeModel={shoe.model} />)
                })}
            </div>
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
}

export default ItemListContainer