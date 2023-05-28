// Could not get the the cartItems to pass to cart successfully!
// chatGPT recommended useEffect to save the items using localStorage. 
// Did not understand it completely but could not get it to work either.

// code from productList.js for future reference:
// useEffect(() => {
//     // Save cartItems to local storage
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     // Retrieve cartItems from local storage when the cart page is loaded
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }


    // original cart code:

// const Cart = ({cartItems = []}) => {
//     console.log("cartItems", cartItems)
//     const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
//     return (
//     <main>
//         <h1>Cart</h1>
//         {cartItems.length === 0 ? (<p>Your cart is empty</p>) : (
//             <>
//                 <ul>
//                 {cartItems.map((item, index) => (
//                     <li key={index}>
//                         {item.name} £{item.price}
//                     </li>
//                     ))}
//                 </ul>
//                 <p>Total: £{totalPrice}</p>
//             </>
//         )}
//     </main>
//     );
// };
// export default Cart 
