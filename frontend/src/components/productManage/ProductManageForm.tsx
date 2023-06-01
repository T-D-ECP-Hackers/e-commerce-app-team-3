import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createProduct} from "../../api/fetchProducts";


function ProductManagePage(props: {}) {

    const [productName, setProductName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<string>();

    const navigate = useNavigate();

    return (
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
    )

}

export default ProductManagePage;