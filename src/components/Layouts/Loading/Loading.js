import React from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './Loading.styles';
import svwLoader from '../../../images/svwloader.gif';

const Loading = (
  // props
) => (
    <div className="loadingWrap">
      <img src={svwLoader} alt=""/>
    </div>
  );

// Loading.propTypes = {
//   // bla: PropTypes.string,
// };

// Loading.defaultProps = {
//   // bla: 'test',
// };

export default Loading;
