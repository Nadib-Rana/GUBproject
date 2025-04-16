import React, { useState } from 'react';
import historyData from './historyData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Badge, ProgressBar } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './OrderHistory.css';

const OrderHistory = () => {
  const [show, setShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleShow = (order) => {
    setSelectedOrder(order);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const generateInvoice = (order) => {
    const doc = new jsPDF();
    
    // Invoice Header
    doc.setFontSize(20);
    doc.setTextColor(40, 53, 147);
    doc.text('INVOICE', 105, 20, { align: 'center' });
    
    // Company Info
    doc.setFontSize(10);
    doc.text('GUB Student Bridge', 15, 30);
    doc.text('123 Campus Road', 15, 35);
    doc.text('Dhaka, Bangladesh', 15, 40);
    
    // Invoice Details
    doc.text(`Invoice #: ORD-${order.id.toString().padStart(4, '0')}`, 150, 30);
    doc.text(`Date: ${order.date}`, 150, 35);
    doc.text(`Status: ${order.status}`, 150, 40);
    
    // Items Table
    doc.autoTable({
      startY: 50,
      head: [['Product', 'Qty', 'Unit Price', 'Total']],
      body: order.items.map(item => [
        item.name,
        item.quantity,
        `৳${item.price.toLocaleString()}`,
        `৳${(item.price * item.quantity).toLocaleString()}`
      ]),
      headStyles: {
        fillColor: [40, 53, 147],
        textColor: 255
      }
    });
    
    // Order Summary
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text('Subtotal:', 150, finalY);
    doc.text(`৳${order.totalPrice.toLocaleString()}`, 180, finalY);
    doc.text('Shipping:', 150, finalY + 5);
    doc.text(`৳${order.shippingFee || 0}`, 180, finalY + 5);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', 150, finalY + 10);
    doc.text(`৳${(order.totalPrice + (order.shippingFee || 0)).toLocaleString()}`, 180, finalY + 10);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text('Thank you for your purchase!', 105, 280, { align: 'center' });
    
    doc.save(`invoice_ORD-${order.id}.pdf`);
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      'Delivered': 'success',
      'Processing': 'warning',
      'Cancelled': 'danger',
      'Shipped': 'info'
    };
    return statusMap[status] || 'primary';
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-bold mb-2">Order History</h1>
          <p className="text-muted">Your recent purchases</p>
        </div>
        <span className="badge bg-primary bg-opacity-10 text-primary fs-6 px-3 py-2">
          {historyData.length} {historyData.length === 1 ? 'Order' : 'Orders'}
        </span>
      </div>

      {historyData.length === 0 ? (
        <div className="text-center py-5 bg-light rounded-3">
          <i className="bi bi-box-seam fs-1 text-muted mb-3"></i>
          <h4>No orders found</h4>
          <p className="text-muted">Your order history will appear here</p>
        </div>
      ) : (
        <div className="row g-4">
          {historyData.map((order) => (
            <div className="col-md-6" key={order.id}>
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-header bg-white d-flex justify-content-between">
                  <div>
                    <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                      #ORD-{order.id.toString().padStart(4, '0')}
                    </span>
                    <Badge bg={getStatusBadge(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <small className="text-muted">{order.date}</small>
                </div>
                
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="text-muted mb-0">ITEMS</h6>
                    <h5 className="mb-0">৳{order.totalPrice.toLocaleString()}</h5>
                  </div>
                  
                  <ul className="list-unstyled">
                    {order.items.slice(0, 2).map((item) => (
                      <li key={item.id} className="d-flex justify-content-between py-2 border-bottom">
                        <span>{item.name}</span>
                        <span className="fw-medium">
                          {item.quantity} × ৳{item.price.toLocaleString()}
                        </span>
                      </li>
                    ))}
                    {order.items.length > 2 && (
                      <li className="text-center text-primary small pt-2">
                        +{order.items.length - 2} more items
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="card-footer bg-white text-end">
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleShow(order)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h6 className="text-muted mb-3">ORDER INFO</h6>
                  <p>
                    <strong>Order #:</strong> ORD-{selectedOrder.id.toString().padStart(4, '0')}
                  </p>
                  <p><strong>Date:</strong> {selectedOrder.date}</p>
                  <p><strong>Status:</strong> <Badge bg={getStatusBadge(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge></p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-muted mb-3">PAYMENT</h6>
                  <p><strong>Method:</strong> {selectedOrder.paymentMethod}</p>
                  <p><strong>Total:</strong> ৳{selectedOrder.totalPrice.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th>Product</th>
                      <th className="text-end">Price</th>
                      <th className="text-end">Qty</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td className="text-end">৳{item.price.toLocaleString()}</td>
                        <td className="text-end">{item.quantity}</td>
                        <td className="text-end fw-medium">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-secondary" onClick={handleClose}>
            Close
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => generateInvoice(selectedOrder)}
          >
            Download Invoice
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderHistory;