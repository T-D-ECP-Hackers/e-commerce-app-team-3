import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createProduct} from "../../api/fetchProducts";


function ProductManagePage(props: {}) {

    const [productName, setProductName] = useState<string>();
    const [description, setDescription] = useState<string>();

    const navigate = useNavigate();

    const [price, setPrice] = useState<string>();

    const handleSubmit = (e: any) => {
        let exampleObject = {name: 'name', description: 'description', price: 1}
        let objectString = JSON.stringify(exampleObject);
        createProduct(objectString, navigate);
        // e.preventDefaut()
    }

    return (
        <div className="product-manage-form">
            <form onSubmit={e => handleSubmit(e)}>
                <label>Product Name
                    <input name="product-name" type="text" value={productName}
                    onChange={e => setProductName(e.target.value)}/>
                </label>
                <label>Product Description
                    <input name="product-description" type="text" value={description}
                    onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>Product Price
                    <input name="product-price" type="text" value={price}
                    onChange={e => setPrice(e.target.value)}/>
                </label>
                <input type="submit" value="Add Product"/>
            </form>
        </div>
    )

}

export default ProductManagePage;