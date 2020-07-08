import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './search-input.scss';

const InputSearch = () => {
  return (
    <div className="search-input-container">
      <FontAwesomeIcon icon={faSearch} color="#48525A" />
      <input className="text-input" placeholder="Search for an Item" />
    </div>
  );
};

export default InputSearch;
