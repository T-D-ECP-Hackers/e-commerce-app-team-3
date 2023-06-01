import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/app/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import ProductsPage from "./components/pages/ProductsPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import OrdersPage from "./components/pages/OrdersPage";
import ProductManagePage from "./components/pages/ProductManagePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
            },
            {
                path: "orders",
                element: <OrdersPage />,
            },
            {
                path: "productManagement",
                element: <ProductManagePage />,
            },
        ],
    },

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
