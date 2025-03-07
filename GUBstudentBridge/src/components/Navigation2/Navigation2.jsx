import React, { useState } from 'react';
import './Navigation2.css';
import Morning from '../Morning/Morning';
import Lunch from '../Lunch/Lunch';
import TwentyFourH from '../24h/24h';

const Navigation2 = () => {
  const [selectedMenu, setSelectedMenu] = useState('Morning');
  const [searchTerm, setSearchTerm] = useState('');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Morning':
        return <Morning searchTerm={searchTerm} />;
      case 'Lunch':
        return <Lunch searchTerm={searchTerm} />;
      case '24h':
        return <TwentyFourH searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <div className="navigation2">
      <div className="navigation-header">
        <div className="cart-icon">
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