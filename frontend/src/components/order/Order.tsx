import {basketProduct} from "../../model/basketProductType";
import OrderProducts from "./OrderProducts";
import {order} from "../../model/orderType";
import {formatAsGBP} from "../../functions/numberFormatter";
import { completeOrder } from '../../api/fetchOrders';

function Order(props: { id: string; dateTimeOfOrder: string; orderedProducts: basketProduct[]; totalCost: number, completed: boolean; setOrders: (value: (((prevState: order[]) => order[]) | order[])) => void }) {
    if (props.completed) {
        return (
            <div className="order">
                <div className="order-id">{props.id}</div>
                <div className="order-date-time">{new Date(props.dateTimeOfOrder).toUTCString()}</div>
                <div className="order-total-cost">{formatAsGBP(props.totalCost)}</div>
                <div className="order-completed">{props.completed ? "Completed" : "Not Completed"}</div>
                <div className="order-products">
                    <OrderProducts orderProducts={props.orderedProducts}/>
                </div>
            </div>
        );
    }

    return (
        <div className="order">
            <div className="order-id">{props.id}</div>
            <div className="order-date-time">{new Date(props.dateTimeOfOrder).toUTCString()}</div>
            <div className="order-total-cost">{formatAsGBP(props.totalCost)}</div>
            <div className="order-completed">{props.completed ? "Completed" : "Not Completed"}</div>
            <div className="order-products">
                <OrderProducts orderProducts={props.orderedProducts}/>
            </div>
            <button className="complete-order"
                    onClick={() => completeOrder(
                        props.id,
                        props.setOrders)}>Complete Order
            </button>
        </div>
    );
}

export default Order;