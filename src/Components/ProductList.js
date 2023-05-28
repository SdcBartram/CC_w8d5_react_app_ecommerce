import {useState, useEffect} from 'react';
import Product from "./Product";


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    const addToCart = (name, price) => {
        const newItem = {name, price}
        setCartItems(prevItems => [...prevItems, newItem])
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

// Could not get the the cartItems to pass to cart successfully!
// chatGPT recommended useEffect to save the items using localStorage. 
// Did not understand it completely but could not get it to work either. 

    // useEffect(() => {
    //     // Save cartItems to local storage
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
    // }, [cartItems])

    // useEffect(() => {
    //     // Retrieve cartItems from local storage when the cart page is loaded
    //     const storedCartItems = localStorage.getItem('cartItems')
    //     if (storedCartItems) {
    //         setCartItems(JSON.parse(storedCartItems))
    //     }
    // }, [])

    

    return (
    <div className="product-list-container">
        <div className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className='item-cell'>{item.name}</td>
                    <td className='price-cell'>£{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Total: £{totalPrice}</p>
          </>
        )}
      </div>
        <hr></hr>
        <div className="product-grid">
        {products.map(product => (
            <div key={product.id} className="product-item">
            <Product name={product.title} price={product.price} imageUrl={product.image} onAddToCart={addToCart} />
            </div>
        ))}
        </div>
    </div>
    );
};

  export default ProductList;