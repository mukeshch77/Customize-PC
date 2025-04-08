import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Builder from './pages/Builder';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (selectedComponents) => {
    setCartItems([...cartItems, selectedComponents]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Builder addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
          />
        </Route>
        <Route path="/checkout">
          <Checkout cartItems={cartItems} placeOrder={placeOrder} clearCart={clearCart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
