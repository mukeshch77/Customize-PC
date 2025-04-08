import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = [
    { id: 1, name: 'Intel Core i9', price: 499 },
    { id: 2, name: 'NVIDIA RTX 3080', price: 799 },
    { id: 3, name: 'Corsair Vengeance 16GB', price: 75 },
    { id: 4, name: 'Samsung 1TB SSD', price: 120 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => {
    alert('Thank you for your purchase!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <h3>Your Order Summary:</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>

      <button onClick={handlePurchase}>Complete Purchase</button>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default Checkout;
