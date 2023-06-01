import {goToProductsPage} from "../../functions/navigation";
import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {fetchBasket} from "../../api/fetchBasket";
import BasketContext from "../../context/BasketContext";
import ProductBody from "../product/ProductBody";

function RootPage() {

    const basket = useContext(BasketContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
    }, []);

    return (
        <div className="app-body">
            <div className="products-page">
                <ProductBody/>
            </div>
        </div>
    );
}

export default RootPage;