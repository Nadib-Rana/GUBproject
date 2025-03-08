import React from 'react';
import './cart.css';

const Cart = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: &#2547; {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p>Total: &#2547; {item.price * item.quantity}</p>
                <button id='delet-item-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total Price: &#2547; {getTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;