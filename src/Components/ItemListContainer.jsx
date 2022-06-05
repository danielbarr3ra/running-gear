import React from "react";
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, shoe, description }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <dl className="row">
                <dt className="col-sm-3">A list of specs</dt>
                <dt className="col-sm-9">A description of the spec</dt>
                <dt className="col-sm-3">Stack</dt>
                <dt className="col-sm-9">39mm (3 inches)</dt>
                <dt className="col-sm-3">{shoe}</dt>
                <dd className="col-sm-9">
                    <p>great running shoe</p>
                    <p>{description}</p>
                </dd>

            </dl></>

    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
    shoe: PropTypes.string,
    description: PropTypes.string
}

export default ItemListContainer