/* eslint-disable no-undef */
import React from "react";
import PropTypes from 'prop-types';
import Item from './Item'
//import ItemCount from "./ItemCount";


const ItemList = ({ catalog }) => {
    return (
        <>
            <div className="wrapper max-w-sm flex justify-between text-black 800 rounded-lg bg-gray-100 shadow-lg" >
                {
                    catalog.map((item) => {
                        return (
                            <>
                                <Item key={item.id} title={item.title} model={item.model} price={item.price} stock={item.stock} imageUrl={item.imageUrl} />
                            </>
                        )
                    })
                }
            </div>
        </>

    )
}

ItemList.propTypes = {
    catalog: PropTypes.array
}

export default ItemList