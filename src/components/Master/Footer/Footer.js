import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <div className="footer">
    <div className="container">
      <div className="top__footer">
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh</p>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <p>0283 826 8160</p>
          </li>
          <li>
            <i className="far fa-envelope"></i>
            <p>phuong@fossil.com</p>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="bottom__footer">
        <p>© Công ty TNHH Fossil Việt Nam</p>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
