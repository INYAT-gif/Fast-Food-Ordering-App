// src/components/OrderList.js
import React from 'react';
import './OrderList.css';

const OrderList = ({ order, setOrder }) => {
  const incrementQuantity = itemId => {
    setOrder(order.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = itemId => {
    setOrder(order.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="order-list">
      <h2>Order List</h2>
      {order.map(item => (
        <div className="order-item" key={item.id}>
          <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
          <button onClick={() => incrementQuantity(item.id)}>+</button>
          <button onClick={() => decrementQuantity(item.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default OrderList;
