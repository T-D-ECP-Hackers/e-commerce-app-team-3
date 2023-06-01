import React, {useContext, useEffect, useState} from 'react';
import Products from "./Products";
import {fetchProducts} from "../../api/fetchProducts";
import {product} from "../../model/productType";
import {fetchBasket} from "../../api/fetchBasket";
import BasketContext from "../../context/BasketContext";

function ProductBody() {

    const [products, setProducts] = useState<product[]>([]);
    const basket = useContext(BasketContext);

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
        fetchProducts(setProducts);
    }, [basket.setCurrentBasket]);

    return (
        <div className="products-body">
                <div className="website-description">
                    <h2>
                        Welcome to Spray n Slay - Your Ultimate Destination for Hair (Human Only)!
                    </h2>
                    <p>
                        At Spray n Slay, we believe that healthy and beautiful hair is the ultimate accessory that can transform your entire look. We are thrilled to present a one-stop shopping experience for all your hair care needs, where you can explore an extensive range of premium quality products designed to make your hair shine, radiate, and slay!
                    </p>
                    <p>
                        See our extensive list of products below...
                    </p>
                </div>
            <div className="products">
                <div className="products-title">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Description</div>
                    <div>Price</div>
                </div>
                <Products products={products}/>
            </div>
        </div>

    );
}

export default ProductBody;