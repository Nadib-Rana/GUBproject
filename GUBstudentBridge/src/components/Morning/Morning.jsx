import React from 'react';
import './Morning.css';
import morningMenu from './MorningData';

const Morning = () => {
  return (
    <div className="morning-menu">
      {morningMenu.map(item => (
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
            {item.stock > 1 ? `In stock (${item.stock})` : <span style={{color:'red'}} >Stock out</span>}
            </p>
            <a href="#" className="btn">Order Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Morning;