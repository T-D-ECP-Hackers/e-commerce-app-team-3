import {basket} from "../model/basketType";

// TODO - Task 6: calculate the total cost of products in here
//Hint: loop through all the products and add to the total cost the total sum of their price * quantity of each product
//Look at frontend/src/model/basketProductType.ts for help on how basket products are structured
export function getTotalCostOfProducts(currentBasket: basket | null) {
    if (currentBasket == null) return 0; 
    return currentBasket?.basketProducts.reduce((accum, item) => accum + (item.product.price * item.quantity), 0)
}