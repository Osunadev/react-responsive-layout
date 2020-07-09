import React, { Component } from 'react';

import SearchInput from '../search-input/search-input.component';
import ItemCard from '../item-card/item-card.component';

import './items-panel.scss';

class ItemsPanel extends Component {
  // state = {  }
  render() {
    return (
      <div className="items-panel-container">
        <SearchInput />
        <div className="items-panel">
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="red" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="blue" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
          <ItemCard itemName="Item" itemPrice="9.99" color="green" />
        </div>
      </div>
    );
  }
}

export default ItemsPanel;
