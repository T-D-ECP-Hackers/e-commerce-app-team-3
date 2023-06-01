import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {createProduct, fetchProducts} from "../../api/fetchProducts";
import {fetchBasket} from "../../api/fetchBasket";
import {product} from "../../model/productType";
import Products from "../productManage/Products";
import BasketContext from "../../context/BasketContext";



function ProductManagePage(props: {}) {

    const [productName, setProductName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<string>();

    const navigate = useNavigate();

    const [products, setProducts] = useState<product[]>([]);
    const basket = useContext(BasketContext);

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
        fetchProducts(setProducts);
    }, [basket.setCurrentBasket]);

    return (
        <div className="products-body">
            <div className="products">
                <div className="products-title">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Description</div>
                    <div>Price</div>
                </div>
                <Products products={products}/>
            </div>
            <div className="product-manage-form">
            <form onSubmit={e => createProduct({name: productName, description: description, price: price}, navigate) }>
                <label>Product Name
                    <input name="product-name" type="text" value={productName}
                    onChange={e => setProductName(e.target.value)}/>
                </label>
                <label>Product Description
                    <input name="product-description" type="text" value={description}
                    onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>Product Price
                    <input name="product-price" type="number" value={price}
                    onChange={e => setPrice(e.target.value)}/>
                </label>
                <input type="submit" value="Add Product"/>
            </form>
        </div>
        </div>
        
    )

}

export default ProductManagePage;