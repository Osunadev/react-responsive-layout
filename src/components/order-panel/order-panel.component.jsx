import React, { Component } from 'react';

import OrderHeader from '../order-header/order-header.component';
import EmptyOrderView from '../empty-order-view/empty-order-view.component';
import OrderCheckoutButton from '../order-checkout-button/order-checkout-button.component';

import './order-panel.scss';

class OrderPanel extends Component {
  // state = {  }
  render() {
    return (
      <div className="order-panel-container">
        <div className="panel">
          <OrderHeader orderTitle="Dine In" orderNum="34567890" />
          <EmptyOrderView />
          <OrderCheckoutButton />
        </div>
      </div>
    );
  }
}

export default OrderPanel;
