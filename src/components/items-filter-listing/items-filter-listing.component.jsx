import React from 'react';

import FilterItem from '../filter-item/filter-item.component';
import './items-filter-listing.scss';

const ItemsFilterListing = ({ itemsListing, selectFilterItem }) => {
  return (
    <section className="items-listing-container">
      {itemsListing.map(item => {
        return (
          <FilterItem
            key={item.id}
            {...item}
            selectFilterItem={selectFilterItem}
          />
        );
      })}
    </section>
  );
};

export default ItemsFilterListing;
