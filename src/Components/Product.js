const Product = ({name, price, imageUrl, onAddToCart}) => {
    
    const handleClick = () => {
        onAddToCart(name, price)
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} className="product-image" alt={name}/> 
            <p>Price: £{price}</p>
            <button onClick={handleClick}>Buy</button>
        </div>
    );
};

export default Product;