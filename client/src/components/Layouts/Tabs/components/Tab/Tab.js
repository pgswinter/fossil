import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Tab.styles';

class Tab extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  // bla: 'test',
};

export default Tab;
