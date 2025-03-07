import React from 'react';
import './Morning.css';
import morningData from './MorningData';

const Morning = ({ searchTerm }) => {
  const filteredData = morningData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="morning-menu">
      {filteredData.map(item => (
        <div className="card" key={item.id}>
          <div className="card-header">
            <div className="provider" dangerouslySetInnerHTML={{ __html: item.provider }}></div>
          </div>
          <div className="card-body">
            <img src={item.image} alt={item.name} className="card-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">&#2547; <b>{item.price}</b></p>
            <p className="stock">
              {item.stock > 1 ? `In stock (${item.stock})` : 'Stock out'}
            </p>
            <a href="#" className="btn">Order Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Morning;