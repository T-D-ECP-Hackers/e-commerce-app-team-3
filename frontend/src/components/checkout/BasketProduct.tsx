import React, { useContext } from 'react';
import BasketContext from "../../context/BasketContext";
import { addProductToBasket, removeProductFromBasket } from '../../api/fetchBasket';

function BasketProduct(props: { id: number; name: string; description: string; price: number; quantity: number; }) {

    const basket = useContext(BasketContext);

    const {id, name, description, price, quantity} = props
    return (
        <div className="checkout-product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-price">£{price}</div>
            <div className="product-quantity">{quantity}</div>
            <button className="add-to-basket"
                    onClick={() => addProductToBasket(
                        id,
                        basket.setCurrentBasket)}>Add to basket
            </button>
            <button className="remove-from-basket"
                    onClick={() => removeProductFromBasket(
                        id,
                        basket.setCurrentBasket)}>Remove from basket
            </button>
        </div>
    );
}

export default BasketProduct;