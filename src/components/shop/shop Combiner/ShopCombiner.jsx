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
    // console.log(product)
    return (
        <div className="shopCombiner container mx-auto">
            <div className="shopItem-wrapper">
                {
                    product.map(val => {
                        return <ShoopItem key={val.id} productObj={val}></ShoopItem>

                    })
                }
            </div>
        </div>
    );
};

export default ShopCombiner;