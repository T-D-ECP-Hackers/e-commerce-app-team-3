import React from 'react';
import Order from "./Order"
import {order} from "../../model/orderType";

function Orders(props: { orders: order[], setOrders: (value: (((prevState: order[]) => order[]) | order[])) => void}) {
    console.log(props.orders)
    return (
        <div className="orders-container">
        {/* TODO - Task 10: mapping of orders into order components */}
        {props.orders?.map((order) => {
                    return (
                        <Order id={order.id} dateTimeOfOrder={order.dateTimeOfOrder} 
                        orderedProducts={order.orderedProducts} totalCost={order.totalCost} 
                        completed={order.completed} setOrders={props.setOrders}/>)
                })}
        </div>
    );
}

export default Orders;