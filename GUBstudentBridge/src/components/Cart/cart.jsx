import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './cart.css';

export default function Cart({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleOrder = () => {
    setShowConfirmModal(true);
  };

  const confirmOrder = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems.map(item => ({
        ...item,
        totalPrice: item.quantity * item.price
      })),
      total: getTotalPrice()
    };

    console.log("Mock Saving Order to File:");
    console.log(JSON.stringify(newOrder, null, 2));
    alert("✅ Order placed! (Check console for mock file output)");

    cartItems.forEach(item => removeFromCart(item.id)); // Remove items from cart
    setShowConfirmModal(false); // Close confirmation modal
  };

  return (
    <>
      <div className="cart">
        <h2 className="text-center mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-between">
            {cartItems.map((item) => (
              <div className="card shadow-lg p-2 mb-2 bg-white rounded text-center" key={item.id} style={{ width: '16%' }}>
                <div onClick={() => handleShow(item)} className="card-header" style={{ cursor: 'pointer' }}>
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <img className="card-img-top w-100" src={item.image} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label fw-semibold">Quantity</label>
                      <div className="d-inline-flex align-items-center gap-2">
                        <button className="btn btn-success btn-sm" onClick={() => decrementQuantity(item.id)}>-</button>
                        <p className="m-0">{item.quantity}</p>
                        <button className="btn btn-success btn-sm" onClick={() => incrementQuantity(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="m-0">Price: <span className="text-success fw-bold">&#2547; {item.price * item.quantity}</span></h6>
                    <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <h3 className="mt-4 w-100 text-center">Total Price: &#2547; {getTotalPrice()}</h3>
            <button className="btn btn-primary mt-3 d-block mx-auto" onClick={handleOrder}>Place Order</button>
          </div>
        )}
      </div>

      {/* Modal: View Item Details */}
      {selectedItem && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="img-fluid" src={selectedItem.image} alt={selectedItem.name} />
            <p>{selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modal: Confirm Order */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place this order?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancel</button>
          <button className="btn btn-success" onClick={confirmOrder}>Confirm</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
