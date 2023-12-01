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

    // State for set an array for storing items object
     const [cartArray,setCartArray] = useState([])
     const addToCartEventHandler = (val)=>{
        const newCartArray = [...cartArray,val]
        setCartArray(newCartArray)
    }

    // state for calculation
    const priceArray = []
    cartArray.map((val)=>{
        priceArray.push(val.price)
    })
    const total = priceArray.reduce((val1,val2)=>{
       return val1+val2
   },0)

    // clear ShoopItem
    const clearItems = ()=>{
        setCartArray([])
    }

    // shipping charge
    let shipping = 0;
    if(cartArray.length !== 0){
        shipping = 10
    }
    
    // Tax Calculation
    const tax = (total*5)/100;

    // Grand Total
    const grandTotal = (total+tax+shipping)

    return (
        <div className="shopCombiner container mx-auto">
            <div className="shopItem-wrapper">
                {
                    product.map(val => {
                        
                        return <ShoopItem key={val.id} productObj={val} addToCart={()=>addToCartEventHandler(val)}></ShoopItem>

                    })
                }
            </div>
            <div className="order-summery">
                <div className="order-summery-wrapper">
                    <h3>Order Summery</h3>
                    <div className="summeryReport">
                        <ul>
                            <li>Selected Items: {cartArray.length}</li>
                            <li>Total Price: ${total}</li>
                            <li>Total Shopping Charges: ${shipping}</li>
                            <li>Tax: ${tax}</li>
                            <li>Grand Total: ${grandTotal}</li>
                        </ul>
                    </div>
                    <div className="cartButtons">
                        <button onClick={clearItems} id="btnClearCart">Clear Cart</button>
                        <button id="btnReviewOrder">Review Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCombiner;