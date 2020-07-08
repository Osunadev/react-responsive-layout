import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import './select-menubar.scss';

const SelectMenuBar = () => {
  return (
    <section className="menubar-container">
      <div className="select-menu">
        <span>Main Menu</span>
        <FontAwesomeIcon
          className="select-icon"
          icon={faSortDown}
          color="white"
        />
      </div>
    </section>
  );
};

export default SelectMenuBar;
