import React from 'react';
import PropTypes from 'prop-types';
import SortBar from '../SortBar';

const onOpenModal = (props) => {
  props.openModal()
}

const TopHeader = (props) => {
  const {
    // Cancel Sort/Filter
    handleCancelSortOrFilter,
    // Filter Date
    isFilteredByDate,
    startDate,
    handleFilterDateFrontr,
    // Sort by Date
    isSortedByDate,
    handleSortByDate,
    isSortedByDescDate,
    handleSortByDescDate,
  } = props;
  return (
    <div className="topHeader">
      <button className="btn btn-add" onClick={() => onOpenModal(props)}>+ Add new item</button>
      <SortBar
        // Cancel Sort/Filter
        handleCancelSortOrFilter={handleCancelSortOrFilter}
        // Filter Date
        isFilteredByDate={isFilteredByDate}
        startDate={startDate}
        handleFilterDateFrontr={handleFilterDateFrontr}
        // Sort by Date
        isSortedByDate={isSortedByDate}
        handleSortByDate={handleSortByDate}
        isSortedByDescDate={isSortedByDescDate}
        handleSortByDescDate={handleSortByDescDate}
      />
    </div>
  )
};

TopHeader.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  isSortedByDate: PropTypes.bool,
  isFilteredByDate: PropTypes.bool,
  isSortedByDescDate: PropTypes.bool,
  
  handleCancelSortOrFilter: PropTypes.func,
  handleFilterDateFrontr: PropTypes.func,
  handleSortByDate: PropTypes.func,
  handleSortByDescDate: PropTypes.func,
};

export default TopHeader;
