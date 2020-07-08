import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLock,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import './header-navbar.scss';

const HeaderNavbar = ({ navBarTitle }) => {
  return (
    <header className="header-navbar">
      <div className="navbar-container">
        <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        <span className="text">{navBarTitle}</span>
      </div>

      <div className="navbar-container">
        <FontAwesomeIcon
          className="user-icon"
          icon={faLock}
          color="white"
          size="lg"
        />
        <FontAwesomeIcon
          className="user-icon"
          icon={faBell}
          color="white"
          size="lg"
        />
        <FontAwesomeIcon
          className="user-icon"
          icon={faUserCircle}
          color="white"
          size="lg"
        />
        <span className="text">Jane F.</span>
      </div>
    </header>
  );
};

export default HeaderNavbar;
