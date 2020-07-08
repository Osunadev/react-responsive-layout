import React, { Component } from 'react';

import SearchInput from '../search-input/search-input.component';

import './items-panel.scss';

class ItemsPanel extends Component {
  // state = {  }
  render() {
    return (
      <div className="items-panel-container">
        <SearchInput />
      </div>
    );
  }
}

export default ItemsPanel;
