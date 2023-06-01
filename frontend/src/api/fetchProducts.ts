import {product} from "../model/productType";
import axios from "axios";
import {productsUrl} from "./apiConstants";
import { goToProductsPage } from "../functions/navigation";
import { NavigateFunction } from "react-router-dom";

export function fetchProducts(setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void) {

    axios(productsUrl).then(response => {
        setProducts(response.data)
    }).catch(error => {
        console.error(error.response.data.message)
    })
}

export function createProduct(productString: string, navigate: NavigateFunction) {
    console.log('sending post request: ', productString);
    axios.post(productsUrl, productString, {}).then(response => {
        console.log("Success creating product: " + response)

    }).catch(error => {
        console.log("Error fetching data: " + error)

    })
    goToProductsPage(navigate)
}