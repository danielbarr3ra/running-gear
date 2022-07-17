import React from "react";
import PropTypes from 'prop-types';
import Item from './Item'


const ItemList = ({ catalog }) => {
    return (
        <div className="flex flex-wrap justify-around" >
            {
                catalog.map((item) => {
                    const { id, title, model, price, stock, imageUrl } = item
                    return (

                        <Item key={id} id={id} title={title} model={model} price={price} stock={stock} imageUrl={imageUrl}
                        />

                    )
                })
            }
        </div>
    )
}

ItemList.propTypes = {
    catalog: PropTypes.array
}

export default ItemList