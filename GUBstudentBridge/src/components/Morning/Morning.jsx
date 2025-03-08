import React from 'react';
import './Morning.css';
import morningData from './MorningData';

const Morning = ({ searchTerm, addToCart }) => {
  const filteredData = morningData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="morning-menu">
      {filteredData.map(item => (
        <div className="card" key={item.id}>
          <div className="card-header">
             <img className='food-cart-img' src={item.image} alt={item.name} />
             <div className="provider" dangerouslySetInnerHTML={{ __html: item.provider }}></div>         
          </div>
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">&#2547; <b>{item.price}</b></p>
            <p className="stock">
              {item.stock > 1 ? `In stock (${item.stock})` : 'Stock out'}
            </p>
            <button onClick={() => addToCart(item)} className="btn">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Morning;