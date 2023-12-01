import './shoopitem.css'

const ShoopItem = (props) => {
    const { name, price, ratings, img, seller } = props.productObj

    return (
        <div className='shopItemWrapper'>
            <div className="singleItemWrapper">
                <div className="img">
                    <img src={img} alt="product" />
                </div>
                <div className="singleItemInfo">
                    <h1>{name}</h1>
                    <h3>Price: ${price}</h3>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button className="addToCartButton">Add to cart</button>
            </div>
        </div>
    );
};

export default ShoopItem;