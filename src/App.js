import React, { Component } from 'react';
import HeaderNavbar from './components/header-navbar/header-navbar-component';
import SelectMenuBar from './components/select-menubar/select-menubar.component';
import ItemsFilterListing from './components/items-filter-listing/items-filter-listing.component';
import ItemsPanel from './components/items-panel/items-panel.component';
import OrderPanel from './components/order-panel/order-panel.component';

import { itemsListing } from './data/items-listing.data';

import './App.scss';

class App extends Component {
  state = {
    itemsListing,
  };

  selectFilterItem = itemId => {
    this.setState(prevState => {
      // Remember that this is just a shallow copy, but that's enough to trigger a re-render
      const copyListing = prevState.itemsListing.map(item => {
        item.selected = false;
        return item;
      });

      copyListing[itemId].selected = true;
      return copyListing;
    });
  };

  render() {
    const { itemsListing } = this.state;

    return (
      <div>
        <HeaderNavbar navBarTitle="Sales Register" />
        <SelectMenuBar />
        <div className="container">
          <ItemsFilterListing
            itemsListing={itemsListing}
            selectFilterItem={this.selectFilterItem}
          />
          <ItemsPanel />
          <OrderPanel />
        </div>
      </div>
    );
  }
}

export default App;
