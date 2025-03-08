import React, { useState } from 'react';
import './Navigation2.css';
import Morning from '../Morning/Morning';
import Lunch from '../Lunch/Lunch';
import TwentyFourH from '../24h/24h';
import Cart from '../Cart/cart';

const Navigation2 = () => {
  const [selectedMenu, setSelectedMenu] = useState('Morning');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Morning':
        return <Morning searchTerm={searchTerm} addToCart={addToCart} />;
      case 'Lunch':
        return <Lunch searchTerm={searchTerm} addToCart={addToCart} />;
      case '24h':
        return <TwentyFourH searchTerm={searchTerm} addToCart={addToCart} />;
      case 'Cart':
        return (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="navigation2">
      <div className="navigation-header">
        <div className="cart-icon" onClick={() => setSelectedMenu('Cart')}>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <nav className="menu">
          <ul>
            <li onClick={() => setSelectedMenu('Morning')}>Morning</li>
            <li onClick={() => setSelectedMenu('Lunch')}>Lunch</li>
            <li onClick={() => setSelectedMenu('24h')}>24 Hour</li>
          </ul>
        </nav>
        <div className="search-icon">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>      
          <div className="filter-icon">
             <i className="fas fa-filter"></i>
          </div>
        </div>
      </div>
      <div className="menu-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Navigation2;