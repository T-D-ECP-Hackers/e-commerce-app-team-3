import {product} from "../model/productType";
import axios from "axios";
import {productsUrl} from "./apiConstants";
import { goToProductManagementPage, goToProductsPage } from "../functions/navigation";
import { NavigateFunction } from "react-router-dom";

export function fetchProducts(setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void) {

    axios(productsUrl).then(response => {
        setProducts(response.data)
    }).catch(error => {
        console.error(error.response.data.message)
    })
}

export function createProduct(productString: any, navigate: NavigateFunction, setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void) {
    console.log('sending post request: ', productString);
    axios.post(productsUrl, productString, {}).then(response => {
        console.log("Success creating product: " + response)
        window.location.reload();
    }).catch(error => {
        console.log("Error fetching data: " + error)

    })
}

export function removeProduct(id: number, navigate: NavigateFunction, setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void) {
    axios.delete(`${productsUrl}/${id}`, {
    }).then(response => {
        console.log("Success removing product: " + JSON.stringify(response));
        window.location.reload();
    }).catch(error => {
        console.log("Error fetching data: " + error)
    })
}