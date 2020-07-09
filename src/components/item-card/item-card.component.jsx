import React from 'react';

import './item-card.scss';

const ItemCard = ({ itemName, itemPrice, color }) => {
  return (
    <div className="item-card-container">
      <div className="color-stripe" style={{ background: color }}></div>
      <div className="item-info">
        <span className="item-name">{itemName}</span>
        <span className="item-price">{'$' + itemPrice}</span>
      </div>
    </div>
  );
};

export default ItemCard;
