import React, {useContext} from 'react';
import BasketContext from "../../context/BasketContext";
import {addProductToBasket, removeProductFromBasket} from "../../api/fetchBasket";
import { formatAsGBP } from '../../functions/numberFormatter';

function Product(props: { id: number; name: string; description: string; price: number; }) {

    const basket = useContext(BasketContext);

    const {id, name, description, price} = props
    return (
        <div className="product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-price">{formatAsGBP(price)}</div>
            <button className="add-to-basket"
                    onClick={() => addProductToBasket(
                        id,
                        basket.setCurrentBasket)}>Add to basket
            </button>
        </div>
    );
}

export default Product;