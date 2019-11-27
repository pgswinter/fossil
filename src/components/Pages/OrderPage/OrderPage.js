import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  reqAddFront,
  reqEditForm,
  reqEditFront,
  reqCancelEdit,
  reqDeleteFront,

  reqFilterDateFront,

  reqSortDateFront,
  reqSortDescDateFront,

  reqSearch,
  reqFetch,
} from '../../../actions/fossil/actions';

import InsertModal from '../../Layouts/InsertModal';
import Loading from '../../Layouts/Loading';
import DataLayout from '../../Layouts/DataLayout';
import TopHeader from '../../Layouts/TopHeader';
import Pagination from '../../Layouts/Pagination';
import Tabs from '../../Layouts/Tabs';

class OrderPage extends PureComponent {

  state = {
    inputText: '',
    activeModal: false,
    startDate: new Date(),
    pagination: {
      pageLimit: 10,
      currentPage: 1,
    }
  };

  componentDidMount = () => {
    const {
      pagination
    } = this.state;
    this.props.reqFetch(pagination);
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  // *** CLOSE INSERT MODAL ** //
  handleClickOutside = (e) => {
    if (this.node.contains(e.target)) {
      this.setState({
        activeModal: false
      })
    }
  }

  // *** OPEN INSERT MODAL ** //
  openModal = () => {
    this.setState({
      activeModal: true
    })
  }

  // *** SEARCH FOSSIL *** //
  handleSearch = (e) => {
    if (e.target.value.length > 0) {
      this.setState(() => {
        return {
          inputText: e.target.value,
        }
      }, () => {
        const { inputText, pagination } = this.state;
        const params = {
          inputText,
          pagination
        }
        this.props.reqSearch(params);
      });
    }
    else {
      this.setState(() => {
        return {
          inputText: '',
        }
      }, () => {
        const { pagination } = this.state;
        this.props.reqFetch(pagination);
      })
    }
  }

  // *** PROCESS CRUD FRONTEND *** //
  handleAdd = (params) => {
    this.props.reqAddFront(params)
  }
  handleEditForm = (id) => {
    this.props.reqEditForm(id)
  }
  handleEdit = (params) => {
    this.props.reqEditFront(params)
  }
  handleCancelEdit = (params) => {
    this.props.reqCancelEdit(params)
  }
  handleDelete = (id) => {
    this.props.reqDeleteFront(id)
  }

  // *** CANCEL SORT/FILTER *** //
  handleCancelSortOrFilter = () => {
    this.setState({
      startDate: new Date(),
    }, () => {
      const { pagination } = this.state;
      this.props.reqFetch(pagination);
    })
  }

  // *** SORT BY DATE *** //
  handleSortByDescDate = () => {
    this.props.reqSortDescDateFront();
  }
  handleSortByDate = () => {
    this.props.reqSortDateFront();
  }

  // *** FILTER BY DATE PICKER *** //
  handleFilterDateFrontr = date => {
    this.setState({
      startDate: date
    }, () => {
      const { startDate } = this.state;
      this.props.reqFilterDateFront(moment(startDate).format('L'));
    })
  }

  // *** PAGINATION *** //
  handlePagination = (e) => {
    e.persist();
    this.setState(prevState => {
      const { pagination } = prevState;
      pagination.currentPage = e.target.id;
      return {
        pagination
      }
    }, () => {
      const {
        pagination
      } = this.state;

      this.props.reqFetch(pagination);
    })
  }

  // *** RENDER MAIN DATA UI *** //
  renderData = (fossilList) => {
    const { isLoaded, loading, data } = fossilList;

    if (!isLoaded || loading) {
      return <Loading />
    } else {
      if (Object.values(data).length > 0) {
        const mainData = data.data;
        const { total_records, order_index } = data;
        const { pagination: { pageLimit, currentPage } } = this.state;

        return <React.Fragment>
          <DataLayout
            handleTodo={this.handleTodo}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleEditForm={this.handleEditForm}
            handleCancelEdit={this.handleCancelEdit}
            list={mainData}
            totalRecord={total_records}
            order_index={order_index}
          />
          <Pagination
            totalRecord={total_records}
            pageLimit={pageLimit}
            handlePagination={this.handlePagination}
            currentPage={parseInt(currentPage)}
          />
        </React.Fragment>
      } else {
        return <Loading />
      }
    }
  }

  // *** MENU LTR - letf to right
  handleTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      activeModal,
      startDate
    } = this.state;
    const { fossilList } = this.props;

    const {
      isSortedByDate,
      isFilteredByDate,
      isSortedByDescDate
    } = fossilList;

    return (
      <div className="orderPage">
        <InsertModal
          active={activeModal}
          handleAdd={this.handleAdd}
        />

        <div className={`${activeModal ? 'active' : ''}`} ref={node => this.node = node}>
          <div className="ltrLayout">
            <Tabs>
              <div label="Confirm">
                <div className="item__content">
                  <TopHeader
                    // Open Modal
                    openModal={this.openModal}
                    // Cancel Sort/Filter
                    handleCancelSortOrFilter={this.handleCancelSortOrFilter}
                    // Sort by Type
                    handleFilterType={this.handleFilterType}
                    // Filter Date
                    isFilteredByDate={isFilteredByDate}
                    startDate={startDate}
                    handleFilterDateFrontr={this.handleFilterDateFrontr}
                    // Sort by Date
                    isSortedByDate={isSortedByDate}
                    handleSortByDate={this.handleSortByDate}
                    isSortedByDescDate={isSortedByDescDate}
                    handleSortByDescDate={this.handleSortByDescDate}
                  />

                  <DebounceInput
                    placeholder="Typing search name ..."
                    className="mainSearch"
                    debounceTimeout={300}
                    onChange={(e) => this.handleSearch(e)}
                  />

                  {this.renderData(fossilList)}
                </div>
              </div>
              <div label="Process">
                <div className="item__content">
                  There is Process layout
              </div>
              </div>
              <div label="Waiting">
                <div className="item__content">
                  There is Waiting layout
                </div>
              </div>
              <div label="Payment">
                <div className="item__content">
                  There is Payment layout
                </div>
              </div>
              <div label="Success">
                <div className="item__content">
                  There is Success layout
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

OrderPage.propTypes = {
  reqFetch: PropTypes.func,

  reqSearch: PropTypes.func,

  reqAddFront: PropTypes.func,
  reqEditForm: PropTypes.func,
  reqCancelEdit: PropTypes.func,
  reqEditFront: PropTypes.func,
  reqDeleteFront: PropTypes.func,

  reqFilterDateFront: PropTypes.func,
  reqSortDateFront: PropTypes.func,
  reqSortDescDateFront: PropTypes.func,

  fossilList: PropTypes.object,
};

const mapStateToProps = state => {
  const { fossil } = state;
  return {
    fossilList: fossil
  }
};

const mapDispatchToProps = dispatch => ({
  reqFetch: (params) => dispatch(reqFetch(params)),
  reqSearch: (params) => dispatch(reqSearch(params)),

  reqAddFront: (params) => dispatch(reqAddFront(params)),
  reqEditForm: (params) => dispatch(reqEditForm(params)),
  reqCancelEdit: (params) => dispatch(reqCancelEdit(params)),
  reqEditFront: (params) => dispatch(reqEditFront(params)),
  reqDeleteFront: (params) => dispatch(reqDeleteFront(params)),

  reqSortDateFront: (params) => dispatch(reqSortDateFront(params)),
  reqSortDescDateFront: (params) => dispatch(reqSortDescDateFront(params)),
  reqFilterDateFront: (params) => dispatch(reqFilterDateFront(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
