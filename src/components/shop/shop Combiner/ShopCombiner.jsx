import { useState, useEffect } from 'react';
import './shopcombiner.css'
import ShoopItem from '../shop Item/ShoopItem';
import OrderSummery from '../order-summery/OrderSummery';

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
    console.log(cartArray)
    
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
                <div className="order-summery-in-page-wrapper">
                    <OrderSummery 
                    itemsAmount={cartArray.length} 
                    total={total} 
                    shipping={shipping} 
                    tax={tax} 
                    grandtotal={grandTotal}
                    clearItem={clearItems}></OrderSummery>
                </div>
            </div>
        </div>
    );
};

export default ShopCombiner;