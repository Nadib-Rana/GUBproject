import React, { useState } from 'react';
import './Navigation2.css';
import Morning from '../Morning/Morning';
import Lunch from '../Lunch/Lunch';
import TwentyFourH from '../24h/24h';
import Cart from '../Cart/cart';
import OrderHistory from '../../pages/OrderHistory/OrderHistory'; // Import OrderHistory

const Navigation2 = () => {
  const [selectedMenu, setSelectedMenu] = useState('Morning');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: '2023-10-01',
      totalPrice: 500,
      items: [
        { id: 1, name: 'Egg Omelette', quantity: 2, price: 20 },
        { id: 2, name: 'Pancakes', quantity: 1, price: 30 }
      ]
    },
    {
      id: 2,
      date: '2023-10-02',
      totalPrice: 300,
      items: [
        { id: 3, name: 'Fruit Bowl', quantity: 1, price: 25 },
        { id: 4, name: 'Chicken Biryani', quantity: 1, price: 50 }
      ]
    }
  ]);

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
      case 'OrderHistory':
        return <OrderHistory />;
      default:
        return null;
    }
  };

  return (

    <div className="navigation2">
      <div className="bg-white shadow-sm border rounded-4 px-4 py-3 mb-4">
  <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3">

    {/* Cart Icon */}
    <div className="d-flex align-items-center">
      <button 
        className="btn btn-light position-relative d-flex align-items-center justify-content-center rounded-circle shadow-sm" 
        onClick={() => setSelectedMenu('Cart')}
        aria-label="Cart"
        style={{ width: '40px', height: '40px' }}
      >
        <i className="fas fa-shopping-cart text-primary"></i>
      </button>
    </div>

    {/* Navigation Menu */}
    <div className="d-flex flex-wrap align-items-center gap-2">
      <button 
        className="btn btn-outline-dark px-3 fw-medium" 
        onClick={() => setSelectedMenu('Morning')}
      >
        Morning
      </button>
      <button 
        className="btn btn-outline-dark px-3 fw-medium" 
        onClick={() => setSelectedMenu('Lunch')}
      >
        Lunch
      </button>
      <button 
        className="btn btn-outline-dark px-3 fw-medium" 
        onClick={() => setSelectedMenu('24h')}
      >
        24 Hour
      </button>
    </div>

    {/* Search Bar */}
    <div className="flex-grow-1 d-flex justify-content-center" style={{ maxWidth: '320px' }}>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0">
          <i className="fas fa-search text-muted"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search menu"
        />
      </div>
    </div>

    {/* Order History */}
    <div>
      <button 
        className="btn btn-primary fw-semibold shadow-sm"
        onClick={() => setSelectedMenu('OrderHistory')}
      >
        Order History
      </button>
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