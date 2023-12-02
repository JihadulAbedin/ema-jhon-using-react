import './shoopitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ShoopItem = (props) => {
    const { name, price, ratings, img, seller } = props.productObj

    return (
        <div className='shopItemWrapper'>
            <div className="singleItemWrapper">
                <div className="img">
                    <img src={img} alt={seller} />
                </div>
                <div className="singleItemInfo">
                    <h1>{name}</h1>
                    <h3>Price: ${price}</h3>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button onClick={props.addToCart} className="addToCartButton">
                    Add to cart
                    <FontAwesomeIcon style={{marginLeft:'8px'}} icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default ShoopItem;