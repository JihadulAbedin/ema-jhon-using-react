import { useState, useEffect } from 'react';
import './shopcombiner.css'
import ShoopItem from '../shop Item/ShoopItem';

const ShopCombiner = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    
     const [cartArray,setCartArray] = useState([])
     const addToCartEventHandler = (val)=>{
        const newCartArray = [...cartArray,val]
        setCartArray(newCartArray)
    }
    // console.log(product)
    return (
        <div className="shopCombiner container mx-auto">
            <div className="shopItem-wrapper">
                {
                    product.map(val => {
                        
                        return <ShoopItem key={val.id} productObj={val} addToCart={addToCartEventHandler}></ShoopItem>

                    })
                }
            </div>
            <div className="order-summery">
                <div className="order-summery-wrapper">
                    <h3>Order Summery</h3>
                    <div className="summeryReport">
                        <ul>
                            <li>Selected Items: {cartArray.length}</li>
                            <li>Total Price:</li>
                            <li>Total Shopping Charges</li>
                            <li>Tax: $</li>
                            <li>Grand Total: $</li>
                        </ul>
                    </div>
                    <div className="cartButtons">
                        <button id="btnClearCart">Clear Cart</button>
                        <button id="btnReviewOrder">Review Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCombiner;