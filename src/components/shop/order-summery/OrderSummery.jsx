import './orderSummery.css'

const OrderSummery = (props) => {
    return (
        <div>
            <div className="order-summery-wrapper">
                    <h3>Order Summery</h3>
                    <div className="summeryReport">
                        <ul>
                            <li>Selected Items: {props.itemsAmount}</li>
                            <li>Total Price: ${props.total}</li>
                            <li>Total Shopping Charges: ${props.shipping}</li>
                            <li>Tax: ${props.tax}</li>
                            <li>Grand Total: ${props.grandtotal}</li>
                        </ul>
                    </div>
                    <div className="cartButtons">
                        <button onClick={props.clearItem} id="btnClearCart">Clear Cart</button>
                        <button id="btnReviewOrder">Review Order</button>
                    </div>
                </div>
        </div>
    );
};

export default OrderSummery;