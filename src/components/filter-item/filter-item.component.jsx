import React from 'react';

import './filter-item.scss';

const FilterItem = ({ id, name, color, selected, selectFilterItem }) => {
  return (
    <div
      className={`filter-item-container ${
        selected ? 'selected-filter-item' : ''
      }`}
      onClick={() => selectFilterItem(id)}
    >
      <div className="item-circle" style={{ backgroundColor: color }}></div>
      <span className={`item-name ${selected ? 'selected-name' : ''}`}>
        {name}
      </span>
    </div>
  );
};

export default FilterItem;
