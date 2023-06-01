import React from 'react';
import {formatAsGBP} from "../../functions/numberFormatter";

function OrderProduct(props: { id: number; name: string; price: number; count: number; }) {

    const {id, name, price, count} = props
    return (
        <div className="order-product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-price">{formatAsGBP(price)}</div>
            <div className="product-quantity">{count}</div>
        </div>
    );
}

export default OrderProduct;