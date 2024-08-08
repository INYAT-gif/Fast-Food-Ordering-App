// src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import OrderList from './components/OrderList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const menuItems = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Fries', price: 2.99 },
  { id: 3, name: 'Drink', price: 1.99 },
];

const App = () => {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = item => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      setOrder(order.map(orderItem => 
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Fast Food Ordering App</h1>
      <ThemeToggle toggleTheme={toggleTheme} />
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <OrderList order={order} setOrder={setOrder} />
    </div>
  );
};

export default App;
