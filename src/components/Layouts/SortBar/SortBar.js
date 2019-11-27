import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
//import { Test } from './SortBar.styles';

// Cancel Sort/Filter
const onHandleCancelSortOrFilter = (props) => {
  props.handleCancelSortOrFilter();
}

// Filter Date
const onHandleFilterDateFrontr = (props, date) => {
  props.handleFilterDateFrontr(date);
}

// Sort by Date
const onHandleSortByDate = (props) => {
  props.handleSortByDate();
}
const onHandleSortByDescDate = (props) => {
  props.handleSortByDescDate();
}


const SortBar = (props) => {

  const {
    startDate,
    isSortedByDate,
    isFilteredByDate,
    isSortedByDescDate,
  } = props;

  return (
    <div className="sortBar">
      {
        isFilteredByDate ?
          <button className='btn btn-submit cancel' onClick={() => onHandleCancelSortOrFilter(props)}>Cancel Filter by Date</button> :
          <React.Fragment>
            <label>Select Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => onHandleFilterDateFrontr(props, date)}
            />
          </React.Fragment>
      }
      {
        isSortedByDescDate ?
          <button className='btn btn-submit cancel' onClick={() => onHandleCancelSortOrFilter(props)}>Cancel Sort by DESC Date</button> :
          <button className='btn btn-submit' onClick={() => onHandleSortByDescDate(props)}>Sort by DESC Date</button>
      }
      {
        isSortedByDate ?
          <button className='btn btn-submit cancel' onClick={() => onHandleCancelSortOrFilter(props)}>Cancel Sort by ASC Date</button> :
          <button className='btn btn-submit' onClick={() => onHandleSortByDate(props)}>Sort by ASC Date</button>
      }
    </div>
  )
};

SortBar.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  isSortedByDate: PropTypes.bool,
  isFilteredByDate: PropTypes.bool,
  isSortedByDescDate: PropTypes.bool,
};

SortBar.defaultProps = {
  // bla: 'test',
};

export default SortBar;
