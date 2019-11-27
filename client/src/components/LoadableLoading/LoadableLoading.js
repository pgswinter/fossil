import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './LoadableLoading.styles';

const LoadableLoading = (props) => {
  if (props.error) {
    // When the loader has errored
    return <div>Error!</div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {

    // When the loader has taken longer than the delay
    return <div
      // {...props}
      className="loading-content">
      Loading ...
    </div>
  } else {
    // When the loader has just started
    return null;
  }
};

LoadableLoading.propTypes = {
  // bla: PropTypes.string,
};

LoadableLoading.defaultProps = {
  // bla: 'test',
};

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(LoadableLoading);
