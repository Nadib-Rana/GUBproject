import React, { useState } from 'react';
import LunchMenu from './LunchData';
import { Modal } from 'react-bootstrap';

const Lunch = ({ searchTerm, addToCart }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const filteredData = LunchMenu.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lunch-menu">
      {filteredData.map(item => (
        <div className="card" key={item.id}>
          <div className="card-header" onClick={() => handleShow(item)} style={{ cursor: 'pointer' }}>
            <img className='food-cart-img' src={item.image} alt={item.name} />
            <div className="provider" dangerouslySetInnerHTML={{ __html: item.provider }}></div>
          </div>
          <div className="card-body">
            <h3>{item.name}</h3>
            <p className="price">&#2547; <b>{item.price}</b></p>
            <p className="stock">
              {item.stock > 1 ? `In stock (${item.stock})` : <span style={{ color: 'red' }}>Stock out</span>}
            </p>
            <button onClick={() => addToCart(item)} className="btn">Order Now</button>
          </div>
        </div>
      ))}

      {/* Modal for item details */}
      {selectedItem && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="img-fluid"
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{
                width: '70%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p>{selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Lunch;