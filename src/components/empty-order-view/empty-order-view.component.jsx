import React from 'react';

import emptyOrderImg from '../../assets/img/Blinky Empty Cart-01.png';

import './empty-order-view.scss';

const EmptyOrderView = () => {
  return (
    <div className="empty-order-container">
      <div className="empty-container">
        <span className="empty-order-msg">
          Tap an item to the left to add it to this order
        </span>
        <img
          src={emptyOrderImg}
          alt="empty-order-img"
          className="empty-image"
        />
      </div>
    </div>
  );
};

export default EmptyOrderView;
