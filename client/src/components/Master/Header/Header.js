import React from 'react';
//import { Test } from './Header.styles';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import user from '../../../images/user.png';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="logo__header">
        <img src={logo} alt="_logo" />
      </div>
      <div className="nav__header">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/">Order</Link></li>
          <li><Link to="/warehouse">Warehouse</Link></li>
          <li><Link to="/customer">Customer</Link></li>
          <li><Link to="/system">System</Link></li>
          <li><Link to="/notification">Notification</Link></li>
          <li>
            <Link to="/account">
              <img src={user} alt="_user" />
              <label>Kanlee</label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
