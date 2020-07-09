import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import './order-header.scss';

const OrderHeader = ({ orderTitle, orderNum }) => {
  return (
    <div className="order-header">
      <div className="icon-circle">
        <FontAwesomeIcon icon={faUtensils} color="white" />
      </div>
      <div className="order-info">
        <span className="order-title">{orderTitle}</span>
        <span className="order-number">#{orderNum}</span>
      </div>

      <div>
        <FontAwesomeIcon icon={faEllipsisV} color="#48525A" size="lg" />
      </div>
    </div>
  );
};

export default OrderHeader;
