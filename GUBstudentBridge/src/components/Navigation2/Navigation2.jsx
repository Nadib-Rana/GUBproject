import React, { useState } from 'react';
import './Navigation2.css';
import Morning from '../Morning/Morning';

const Navigation2 = () => {
  const [selectedMenu, setSelectedMenu] = useState('Morning');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Morning':
        return <Morning />;
      case 'Lunch':
        return <div>Lunch Menu Content</div>;
      case '24h':
        return <div>24 Hours Menu Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="navigation2">
      <div className="navigation-header">
      <div className="filter-icon">
          <i className="fas fa-filter"></i>
        </div>
        <nav className="menu">
          <ul>
            <li onClick={() => setSelectedMenu('Morning')}>Morning</li>
            <li onClick={() => setSelectedMenu('Lunch')}>Lunch</li>
            <li onClick={() => setSelectedMenu('24h')}>24 Hour</li>
          </ul>
        </nav>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <div className="menu-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Navigation2;