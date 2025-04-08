import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Intel Core i9', price: 499 },
    { id: 2, name: 'NVIDIA RTX 3080', price: 799 },
    { id: 3, name: 'Corsair Vengeance 16GB', price: 75 },
    { id: 4, name: 'Samsung 1TB SSD', price: 120 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
