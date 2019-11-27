import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './News.styles';
import Item from './components/Item';
import { log } from 'util';

const DataLayout = (props) => {
  const {
    list,
    order_index,
    totalRecord,
    handleLike,
    handleEdit,
    handleDelete,
    handleEditForm,
    handleCancelEdit
  } = props;

  return (
    <div className="lists">
      <p className="notification">You have <span>{order_index}</span> orders, waiting for your confirm</p>
      <ul className="header__lists">
        <li>Name</li>
        <li>Quantity</li>
        <li>Date order</li>
        <li>Order ID</li>
        <li>Total</li>
        <li></li>
      </ul>
      <ul className="bodyList">
        {
          list.map((item, i) => {
            const { isEditting } = item;
            return (
              <li key={i}>
                <Item
                  item={item}
                  isEditting={isEditting}
                  handleLike={handleLike}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleEditForm={handleEditForm}
                  handleCancelEdit={handleCancelEdit}
                />
              </li>
            )
          })
        }
      </ul>
      <div className="footer__lists">
        <div className="left__footerList">
          <label>You have {totalRecord} orders</label>
        </div>
        <div className="right__footerList">

        </div>
      </div>
    </div>
  )
};

DataLayout.propTypes = {
  order_index: PropTypes.number,
  totalRecord: PropTypes.string,
  handleLike: PropTypes.func,
  handleEditForm: PropTypes.func,
  handleCancelEdit: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  list: PropTypes.array,
};

DataLayout.defaultProps = {
  // bla: 'test',
};

export default DataLayout;
