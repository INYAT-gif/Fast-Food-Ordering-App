// src/components/Menu.js
import React from 'react';
import './Menu.css';

const Menu = ({ menuItems, addToOrder }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Burger':
        return '/images/burger.jpg';
      case 'Fries':
        return '/images/fries.jpg';
      case 'Drink':
        return '/images/soda.jpg';
      default:
        return '/placeholder.jpg'; // in case you add more items without images
    }
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={getImage(item.name)} alt={item.name} className="menu-item-image" />
            <h5>{item.name}</h5>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
