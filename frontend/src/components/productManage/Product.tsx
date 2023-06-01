import React, {useContext} from 'react';
import BasketContext from "../../context/BasketContext";
import {addProductToBasket, removeProductFromBasket} from "../../api/fetchBasket";
import { removeProduct } from '../../api/fetchProducts';

function Product(props: { id: number; name: string; description: string; price: number; }) {

    const basket = useContext(BasketContext);

    const {id, name, description, price} = props
    return (
        <div className="product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-price">£{price}</div>
            <button className="remove-product"
                    onClick={() => removeProduct(id)}>Remove Product
            </button>
        </div>
    );
}

export default Product;