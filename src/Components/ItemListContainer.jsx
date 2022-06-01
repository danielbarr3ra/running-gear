import React from "react";

const ItemListContainer = ({ greeting, shoe, description }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <dl class="row">
                <dt class="col-sm-3">A list of specs</dt>
                <dt class="col-sm-9">A description of the spec</dt>
                <dt class="col-sm-3">Stack</dt>
                <dt class="col-sm-9">39mm (3 inches)</dt>
                <dt class="col-sm-3">{shoe}</dt>
                <dd class="col-sm-9">
                    <p>great running shoe</p>
                    <p>{description}</p>
                </dd>

            </dl></>

    )
}

export default ItemListContainer