import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Pagination.styles';
import twoNumber from '../../../util/twoNumber';

const onPagination = (e, props) => {
  props.handlePagination(e)
}

const Pagination = (props) => {
  const {
    totalRecord,
    pageLimit,
    currentPage
  } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecord / pageLimit) - 1; i++) {
    if (i === currentPage) {
      if (currentPage === 1) {
        pageNumbers.push(i);
        pageNumbers.push(i + 1);
        pageNumbers.push(i + 2);
        pageNumbers.push(Math.ceil(totalRecord / pageLimit) - 1);
      } else if (currentPage <= Math.ceil(totalRecord / pageLimit) - 4) {
        pageNumbers.push(i - 1);
        pageNumbers.push(i);
        pageNumbers.push(i + 1);
        pageNumbers.push(Math.ceil(totalRecord / pageLimit) - 1);
      } else {
        pageNumbers.push(1);
        pageNumbers.push(Math.ceil(totalRecord / pageLimit) - 3);
        pageNumbers.push(Math.ceil(totalRecord / pageLimit) - 2);
        pageNumbers.push(Math.ceil(totalRecord / pageLimit) - 1);
      }
    }
  }
  return (
    <ul className={`pagination ${currentPage > Math.ceil(totalRecord / pageLimit) - 4 ? 'threeDotFirst' : ''}`}>
      <li
        className="first"
        id={1}
        onClick={(e) => onPagination(e, props)}
      >
        First
      </li>
      {
        pageNumbers.map(number => {
          return (
            <li
              className={`
                ${currentPage === number ? `active` : ''}
                ${currentPage <= Math.ceil(totalRecord / pageLimit) - 4 ?
                  ((number === currentPage + 2 && currentPage === 1) || (number === currentPage + 1 && currentPage !== 1) ?
                    `threeDotLeft` : '')
                  : ''}
              `}
              key={number}
              id={number}
              onClick={(e) => onPagination(e, props)}
            >
              {twoNumber(number)}
            </li>
          );
        })
      }
      <li
        className="last"
        id={Math.ceil(totalRecord / pageLimit) - 1}
        onClick={(e) => onPagination(e, props)}
      >
        Last
      </li>
    </ul>
  )
};

Pagination.propTypes = {
  totalRecord: PropTypes.string,
  pageLimit: PropTypes.number,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  // bla: 'test',
};

export default Pagination;
