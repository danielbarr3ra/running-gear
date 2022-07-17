import React from "react";
import PropTypes from 'prop-types';
import Item from './Item'


const ItemList = ({ catalog }) => {
    return (
        <>
            <div className="wrapper max-w-sm flex justify-between text-black 800 rounded-lg bg-gray-100 shadow-lg" >
                {
                    catalog.map((item) => {
                        const { id, title, model, price, stock, imageUrl } = item
                        return (
                            <>
                                <Item key={id} id={id} title={title} model={model} price={price} stock={stock} imageUrl={imageUrl}
                                />
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