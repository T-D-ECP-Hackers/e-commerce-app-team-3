import React, {useContext} from "react";
import {checkout} from "../../api/fetchBasket";
import {useNavigate} from "react-router-dom";
import BasketContext from "../../context/BasketContext";
import {getTotalCostOfProducts} from "../../functions/getTotalCostOfProducts";
import {formatAsGBP} from "../../functions/numberFormatter";
import {generateNewOrder} from "../../api/fetchOrders";
import { format } from "path";

function CheckoutSummary({setShowCheckoutSummary}: { setShowCheckoutSummary: React.Dispatch<React.SetStateAction<boolean>> }) {

    const basket = useContext(BasketContext);
    const navigate = useNavigate();

    let totalCostOfItems = getTotalCostOfProducts(basket.currentBasket);
    let shippingCost = getShippingCost(totalCostOfItems)


    // TODO - Task 7: calculate the shipping costs
    // For every £1 worth of items, shipping costs 10p
    // If the total cost of items was £10, the shipping would be £1
    // Also if the total cost of items is over or equal to £50, the shipping costs are free or worth £0
    function getShippingCost(totalCostOfItems: number) {
        let shippingCost = 0.0000;
        if (totalCostOfItems > 50) return shippingCost;
        shippingCost = totalCostOfItems / 10;
        return shippingCost;
    }

    // TODO - Task 7: calculate the total cost of items and shipping
    function getTotalCost(totalCostOfItems: number, shippingCost: number) {
        return totalCostOfItems + shippingCost;
    }

    function checkoutBasket() {
        generateNewOrder(basket.currentBasket, getTotalCost(totalCostOfItems, shippingCost));
        checkout(basket.setCurrentBasket, navigate);
    }

    return (
        <div className="checkout-summary-container">
            <div className="checkout-summary">
                <label>Subtotal - {formatAsGBP(totalCostOfItems)}</label>
                <label>Shipping cost - {formatAsGBP(shippingCost)}</label>
                <label>Total cost - {formatAsGBP(getTotalCost(totalCostOfItems, shippingCost))}</label>
                <div className="checkout-summary-buttons">
                    <div className="checkout-summary-button" onClick={() => setShowCheckoutSummary(false)}>Go Back</div>
                    <div className="checkout-summary-button" onClick={() => checkoutBasket()}>Complete Checkout</div>
                </div>

            </div>
        </div>
    )
}

export default CheckoutSummary;